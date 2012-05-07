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
        X: new Register(16, true),
        Y: new Register(16, true),
        SP: new Register(16, true),
        PC: new Register(16, true),
        CC: new Register(8)
    });

    // Method to complete 1 step of a program
	var stepProgram = function() {
		var bytes_read = 0;
        var opcode = this.memory.getUnit(this.programCounter.value).value;
		bytes_read++;
		this.programCounter.incValue();
		//this.programCounter.value++;

       	op = this.ops.getOp(opcode);
		
        if(op == undefined) {
        	opcode = opcode << 8;
        	opcode += this.memory.getUnit(this.programCounter.value).value;
			bytes_read++;
			this.programCounter.incValue();
        	op = this.ops.getOp(opcode);
        	if(op == /* still */ undefined) {
        		alert("Invalid opcode.");
        	}
        }

		var bytes = [];
		for(; bytes_read<op.bytes; bytes_read++) {
			bytes.push(this.memory.getUnit(this.programCounter.value).value);
			this.programCounter.incValue();
		}

		console.log(this.programCounter.value)

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

	// Add labels for registers
	for (var r in registers.registers) {
		var register = registers.registers[r];
		if (register.index) {
			register.label = new Label(r, register.value);
			mc.memory.addLabel(register.label);
			// Set the label to update when the register
			// changes its value
			register.change(function(register) {
				register.label.setAddress(register.value);
			});
		}
	}

	// Takes the properties all versions for the same macro
	//	with the same basic operation
	mc.addMultiAddressOp = function(properties, evaluation, addresses) {
		if(!addresses)
			var addresses = 1;
		for (var mode in properties.modes) {
			if(mode == "IMM")
				addressing = function(mc, bytes) {
					var memory = [];
					for(var b in bytes)
					{
						var mu = new MemoryUnit(null);
						mu.setValue(bytes[b]);
						memory.push(mu);
					}
					evaluation(mc, memory);
				};
			else if(mode == "DIR")
				addressing = function(mc, bytes) {
					var memory = [];					
					for(var b in bytes)
						for(var i = 0; i < addresses; i++)
							memory.push(mc.memory.getUnit(bytes[b] + i, true));
					evaluation(mc, memory);
				};
			else if(mode == "EXT")
				addressing = function(mc, bytes) {
					var memory = [];
					for(var b = 0; b < bytes.length; b += 2)
					{
						for(var i = 0; i < addresses; i++)
						{
							// We assume big-endian storage, so left-shift the first byte read.
							var address = bytes[b] << 8 + bytes[b + 1];
							memory.push(mc.memory.getUnit(address + i, true));
						}
					}
					evaluation(mc, memory);
				};
			else if(mode == "INDX")
				addressing = function(mc, bytes) {
					var address = bytes[0] + mc.registers.getRegister("X").value;
					var memory = [];
					for(var i = 0; i < addresses; i++)
						memory.push(mc.memory.getUnit(address + i, true));
					evaluation(mc, memory);
				};
			else if(mode == "INDY")
				addressing = function(mc, bytes) {
					var address = bytes[0] + mc.registers.getRegister("Y").value;
					var memory = [];
					for(var i = 0; i < addresses; i++)
						memory.push(mc.memory.getUnit(address + i, true));
					evaluation(mc, memory);
				};

			var operation = new Operation({
					macro: properties.macro,
					opcode: properties.modes[mode][0],
					clocks: properties.modes[mode][2],
					bytes: properties.modes[mode][1],
				}, addressing
			);
			
			mc.ops.addOp(operation);
		}
	}

	// Add operations
	mc.addMultiAddressOp({
			macro: "LDAA",
			modes: {IMM:  [0x86, 2, 2],
			        DIR:  [0x96, 3, 2],
			        EXT:  [0xB6, 3, 4],
			        INDX: [0xA6, 2, 4],
			        INDY: [0x18A6, 3, 5]}
		}, function(mc, memory) {
			mc.registers.getRegister("A").setValue(memory[0].value);
		}
	);
	mc.addMultiAddressOp({
			macro: "LDAB",
			modes: {IMM:  [0xC6, 2, 2],
			        DIR:  [0xD6, 3, 2],
			        EXT:  [0xF6, 3, 4],
			        INDX: [0xE6, 2, 4],
			        INDY: [0x18E6, 3, 5]}
		}, function(mc, memory) {
			mc.registers.getRegister("B").setValue(memory[0].value);
		}
	);
	mc.addMultiAddressOp({
			macro: "STAA",
			modes: {DIR:  [0x97, 2, 3],
			        EXT:  [0xB7, 3, 4],
			        INDX: [0xA7, 2, 4],
			        INDY: [0x18A7, 3, 5]}
		}, function(mc, memory) {
			memory[0].setValue(mc.registers.getRegister("A").getValue());
		}
	);
	mc.addMultiAddressOp({
			macro: "STAB",
			modes: {DIR:  [0xD7, 2, 3],
			        EXT:  [0xF7, 3, 4],
			        INDX: [0xE7, 2, 4],
			        INDY: [0x18E7, 3, 5]}
		}, function(mc, memory) {
			memory[0].setValue(mc.registers.getRegister("b").getValue());
		}
	);
	mc.addMultiAddressOp({
			macro: "LDD",
			modes: {IMM:  [0xCC, 3, 3],
			        DIR:  [0xDC, 2, 4],
			        EXT:  [0xFC, 3, 5],
			        INDX: [0xEC, 2, 5],
			        INDY: [0x18EC, 3, 6]}
		}, function(mc, memory) {
			mc.registers.getRegister("A").setValue(memory[0].value);
			mc.registers.getRegister("B").setValue(memory[1].value);
		},
		2 // Ask for 2 consecutive bytes at each address given.
	);

	// Return the MicroController object
	return mc;
}
