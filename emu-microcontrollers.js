/***********************************************************
*
* Motorola 68HC11
*
* Builds on MicroController object
*	defines:
*		registers, memory size
*		How programs run
*		Operation set
*		Functions for adding sets of similar operations
*
************************************************************/

function Motorola68HC11() {
    // Create Registers
    var registers = new Registers({
        A: new Register(8),
        B: new Register(8),
        X: new Register(16),
        Y: new Register(16),
        SP: new Register(16),
        PC: new Register(16),
        CC: new Register(8)
    });

    // Method to complete 1 step of a program
	var stepProgram = function() {
        var opcode = this.memory.getUnit(this.programCounter.value).value;
        this.programCounter.value++;
		
        var op = this.ops.getOp(opcode);

        var bytes = [];
        for(var b=1; b<op.bytes; b++) {
            bytes.push(this.memory.getUnit(this.programCounter.value).value);
            this.programCounter.value++;
        }

        op.execute(this, bytes);
    }

	// Create microController object
	var mc = new MicroController({
		registers: registers,
		memorySize: 0xFFFF,
		programCounter: registers.getRegister("PC"),
		operations: new OperationSet(),
		stepProgram: stepProgram
	});

	// Takes the properties all versions for the same macro
	//	with the same basic operation
	mc.addMultiAddressOp = function(properties, evaluation) {
		for (var mode in properties.modes) {
			if(mode == "IMM")
				addressing = function(mc, bytes) {
					evaluation(mc, bytes);
				};
			else if(mode == "DIR")
				addressing = function(mc, bytes) {
					var data = [];
					
					for(var byte in bytes)
						data.push(mc.memory.getUnit(bytes[byte], true).value);
					evaluation(mc, data);

				};
			else if(mode == "EXT")
				addressing = function(mc, bytes) {
					var data = [];
					for(var b = 0; b < bytes.length; b += 2)
					{
						// We assume big-endian storage, so left-shift the first byte read.
						var byte = bytes[b] << 8 + bytes[b + 1];
						data.push(mc.memory.getUnit(byte, true).value);
					}
					evaluation(mc, data);
				};
			else if(mode == "INDX")
				addressing = function(mc, bytes) {
					var address = bytes[0] + mc.registers.getRegister("X").value;
					var data = [mc.memory.getUnit(address, true).value];
					evaluation(mc, data);
				};
			else if(mode == "INDY")
				addressing = function(mc, bytes) {
					var address = bytes[0] + mc.registers.getRegister("Y").value;
					var data = [mc.memory.getUnit(address, true).value];
					evaluation(mc, data);
				};

			var operation = new Operation({
					macro: properties.macro,
					opcode: properties.modes[mode][0],
					clocks: properties.modes[mode][1],
					bytes: properties.modes[mode][2],
				}, addressing
			);
			
			mc.ops.addOp(operation);
		}
	}

	// Add operations
	mc.addMultiAddressOp({
			macro: "LDAA",
			versions: 5,
			modes: {IMM:  [0x86, 2, 2],
			        DIR:  [0x96, 3, 2],
			        EXT:  [0xB6, 3, 4],
			        INDX: [0xA6, 2, 4],
			        INDY: [0x18A6, 3, 5]}
		}, function(mc, data) {
			mc.registers.getRegister("A").setValue(data[0]);
		}
	);


	// Return the MicroController object
	return mc;
}
