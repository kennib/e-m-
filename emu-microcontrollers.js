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

        var bytes = 0;
        for(var b=1; b<op.bytes; b++) {
            bytes = bytes << 8;
            bytes += this.memory.getUnit(this.programCounter.value).value;
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
	mc.addMultiAddressOp = function(properties, operation) {
		for (var op=0; op<properties.versions; op++) {
			var operation = new Operation({
					macro: properties.macro,
					opcode: properties.opcodes[op],
					clocks: properties.clocks[op],
					bytes: properties.bytes[op]
				}, operation
			);

			mc.ops.addOp(operation);
		}
	}

	// Add operations
	mc.addMultiAddressOp({
			macro: "LDAA",
			versions: 5,
			opcodes: [0x86, 0x96, 0xB6, 0xA6, 0x18A6],
			clocks: [2, 3, 4, 4, 5],
			bytes: [2, 2, 3, 2, 3]
		}, function(mc, bytes) {
			var mem = mc.memory.getUnit(bytes, true);
			mc.registers.getRegister("A").setValue(mem.value);
		}
	);


	// Return the MicroController object
	return mc;
}
