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
    
    // Map of the ranges in memory
    var memoryMap = [
    	{start: 0x0000, end: 0x01FF, name: "On-Chip RAM"},
    	{start: 0x0200, end: 0x0FFF, name: "External RAM"},
    	{start: 0x1040, end: 0x3FFF, name: "External RAM"},
    	{start: 0x4000, end: 0x7FFF, name: "External RAM"},
    	{start: 0xB600, end: 0xB7FF, name: "On-Chip EEPROM"},
    	{start: 0xD000, end: 0xFFFF, name: "Buffalo ROM"},

    	{start: 0x1000, end: 0x103F, name: "Peripheral Registers"},
    ];
    
	
    // Method to complete 1 step of a program
	var stepProgram = function() {
		var bytes_read = 0;
        var opcode = this.memory.getUnit(this.programCounter.value).value;
		bytes_read++;
		this.programCounter.value++;
		
       	op = this.ops.getOp(opcode);
		
        if(op == undefined) {
        	opcode = opcode << 8;
        	opcode += this.memory.getUnit(this.programCounter.value).value;
			bytes_read++;
			this.programCounter.value++;

        	op = this.ops.getOp(opcode);
        	if(op == /* still */ undefined) {
        		alert("Invalid opcode.");
        		this.running = false;
        		return;
        	}
        }

		var bytes = [];
		for(; bytes_read<op.bytes; bytes_read++) {
			bytes.push(this.memory.getUnit(this.programCounter.value).value);
			this.programCounter.value++;
		}

        var val = op.execute(this, bytes);
		mc.conditionCodes(op, val);
    }

	// Create microController object
	var mc = new MicroController({
		registers: registers,
		memorySize: 0xFFFF,
		memoryMap: memoryMap,
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
	
	// Method to update the control register
	mc.conditionCodes = function(opcode, value) {
		var condition = mc.registers.getRegister("CC");
		if (opcode.conditions == undefined || value == undefined)
			return;
		
		var codes = ["C", "V", "Z", "N", "I", "H", "X", "S"];
		var byte_size = 0x100; //mc.memory.size;
		
		var final = ((value%byte_size)+byte_size)%byte_size; // The actual value stored
		
		for (var c in codes) {
			var code = codes[c];
			var bit = null;
			
			
			if (opcode.conditions[code] == null) {
				switch(code) {
					case "C":
						bit = (value >= byte_size);
						break;
					case "V":
						bit = (value >= (byte_size>>1) || value <= -(byte_size>>1));
						break;
					case "Z":
						bit = (final == 0);
						break;
					case "N":
						bit = (final&(byte_size>>1) > 0);
						break;
					case "I":
						break;
					case "H":
						break;
					case "S":
						break;
					case "X":
						break;
				}
			} else if (opcode.conditions[code] != null) {
				bit = opcode.conditions[code];
			}
			if (bit != undefined) {
				if (bit)
					condition.value = condition.value.bitSet(c);
				else
					condition.value = condition.value.bitUnset(c);
			}
		}
	}
	
	// Takes the properties all versions for the same macro
	//	with the same basic operation
	mc.addMultiAddressOp = function(properties, evaluation, addresses) {
		if(!addresses)
			var addresses = 1;
		for (var mode in properties.modes) {
			if(mode == "INH")
				addressing = function(mc, bytes) {
					var memory = [];
					return evaluation(mc, memory);
				};
			else if(mode == "IMM")
				addressing = function(mc, bytes) {
					var memory = [];
					for(var b in bytes)
					{
						var mu = new MemoryUnit(null);
						mu.value = bytes[b];
						memory.push(mu);
					}
					return evaluation(mc, memory);
				};
			else if(mode == "DIR")
				addressing = function(mc, bytes) {
					var memory = [];					
					for(var b in bytes)
						for(var i = 0; i < addresses; i++)
							memory.push(mc.memory.getUnit(bytes[b] + i, true));
					return evaluation(mc, memory);
				};
			else if(mode == "EXT")
				addressing = function(mc, bytes) {
					var memory = [];
					for(var b = 0; b < bytes.length; b += 2)
					{
						for(var i = 0; i < addresses; i++)
						{
							// We assume big-endian storage, so left-shift the first byte read.
							var address = (bytes[b] << 8) + bytes[b + 1];
							memory.push(mc.memory.getUnit(address + i, true));
						}
					}
					return evaluation(mc, memory);
				};
			else if(mode == "INDX")
				addressing = function(mc, bytes) {
					var address = bytes[0] + mc.registers.getRegister("X").value;
					var memory = [];
					for(var i = 0; i < addresses; i++)
						memory.push(mc.memory.getUnit(address + i, true));
					return evaluation(mc, memory);
				};
			else if(mode == "INDY")
				addressing = function(mc, bytes) {
					var address = bytes[0] + mc.registers.getRegister("Y").value;
					var memory = [];
					for(var i = 0; i < addresses; i++)
						memory.push(mc.memory.getUnit(address + i, true));
					return evaluation(mc, memory);
				};
			else if(mode == "REL")
				addressing = function(mc, bytes) {
					// Convert from two's complement
					var byte = ((bytes[0] & 0x80) ? -(((bytes[0] ^ 0xFF) & 0xFF) + 1) : bytes[0]);
					var address = byte + mc.registers.getRegister("PC").value;
					var memory = [];
					for(var i = 0; i < addresses; i++)
						memory.push(mc.memory.getUnit(address + i, true));
					return evaluation(mc, memory);
				};

			var operation = new Operation({
					macro: properties.macro,
					opcode: properties.modes[mode][0],
					clocks: properties.modes[mode][2],
					bytes: properties.modes[mode][1],
					conditions: properties.conditions,
				}, addressing
			);
			
			mc.ops.addOp(operation);
		}
	}

	// Increment operations
	mc.addMultiAddressOp(opcodes68HC11["INC"],
		function(mc, memory) {
			memory[0].value++;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["INCA"],
		function(mc, memory) {
			mc.registers.getRegister("A").value++;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["INCB"],
		function(mc, memory) {
			mc.registers.getRegister("B").value++;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["INX"],
		function(mc, memory) {
			mc.registers.getRegister("X").value++;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["INY"],
		function(mc, memory) {
			mc.registers.getRegister("Y").value++;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["INS"],
		function(mc, memory) {
			mc.registers.getRegister("SP").value++;
		}
	);
	
	// Addition operations
	mc.addMultiAddressOp(opcodes68HC11["ABA"],
		function(mc, memory) {
			var a = mc.registers.getRegister("A").value;
			var b = mc.registers.getRegister("B").value;
			var res = a+b;
			mc.registers.getRegister("A").value = res;
			return res;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["ABX"],
		function(mc, memory) {
			mc.registers.getRegister("X").value += mc.registers.getRegister("B").value;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["ABY"],
		function(mc, memory) {
			mc.registers.getRegister("Y").value += mc.registers.getRegister("B").value;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["ADCA"], // Unsure what "add with carry" means, this function may need fixing
		function(mc, memory) {
			mc.registers.getRegister("A").value += memory[0].value;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["ADCB"],	// Unsure what "add with carry" means, this function may need fixing
		function(mc, memory) {
			mc.registers.getRegister("B").value += memory[0].value;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["ADDA"],
		function(mc, memory) {
			mc.registers.getRegister("A").value += memory[0].value;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["ADDB"],
		function(mc, memory) {
			mc.registers.getRegister("B").value += memory[0].value;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["ADDD"],
		function(mc, memory) {
			var a = mc.registers.getRegister("A");
			var b = mc.registers.getRegister("B");
			var d = (a.value << 8) + b.value;
			var s = (memory[0].value << 8) + memory[1].value;
			d += s;
			d = d.byteWrap(16);
			a.value = (d >> 8) & 0x00FF;
			b.value = d & 0x00FF;
		}, 2
	);
	
	// Decrement operations
	mc.addMultiAddressOp(opcodes68HC11["DEC"],
		function(mc, memory) {
			memory[0].value--;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["DECA"],
		function(mc, memory) {
			mc.registers.getRegister("A").value--;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["DECB"],
		function(mc, memory) {
			mc.registers.getRegister("B").value--;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["DEX"],
		function(mc, memory) {
			mc.registers.getRegister("X").value--;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["DEY"],
		function(mc, memory) {
			mc.registers.getRegister("Y").value--;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["DES"],
		function(mc, memory) {
			mc.registers.getRegister("SP").value--;
		}
	);
	
	// Subtraction operators
	mc.addMultiAddressOp(opcodes68HC11["SUBA"],
		function(mc, memory) {
			var a = mc.registers.getRegister("A");
			a.value = a.value - memory[0].value;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["SUBB"],
		function(mc, memory) {
			var b = mc.registers.getRegister("B");
			b.value = b.value - memory[0].value;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["SUBD"],
		function(mc, memory) {
			var a = mc.registers.getRegister("A");
			var b = mc.registers.getRegister("B");
			var d = (a.value << 8) + b.value;
			var s = (memory[0].value << 8) + memory[1].value;
			d -= s;
			d = d.byteWrap(16);
			a.value = (d >> 8) & 0x00FF;
			b.value = d & 0x00FF;
		},
		2
	);
	
	// Flow control: branches and jumps
	mc.addMultiAddressOp(opcodes68HC11["JMP"],
		function(mc, memory) {
			mc.registers.getRegister("PC").value = memory[0].address;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["BRA"],
		function(mc, memory) {
			mc.registers.getRegister("PC").value = memory[0].address;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["BRN"],
		function(mc, memory) {
			// Why?
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["BEQ"],
		function(mc, memory) {
			if(mc.registers.getRegister("CC").value & (1 << 2))
				mc.registers.getRegister("PC").value = memory[0].address;
		}
	);
	
	// Loading and storing
	mc.addMultiAddressOp(opcodes68HC11["LDAA"],
		function(mc, memory) {
			mc.registers.getRegister("A").value = memory[0].value;
			return memory[0].value;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["LDAB"],
		function(mc, memory) {
			mc.registers.getRegister("B").value = memory[0].value;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["STAA"],
		function(mc, memory) {
			memory[0].value = mc.registers.getRegister("A").value;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["STAB"],
		function(mc, memory) {
			memory[0].value = mc.registers.getRegister("B").value;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["LDD"],
		function(mc, memory) {
			mc.registers.getRegister("A").value = memory[0].value;
			mc.registers.getRegister("B").value = memory[1].value;
		},
		2 // Ask for 2 consecutive bytes at each address given.
	);
	mc.addMultiAddressOp(opcodes68HC11["STD"],
		function(mc, memory) {
			memory[0].value = mc.registers.getRegister("A").value;
			memory[1].value = mc.registers.getRegister("B").value;
		},
		2
	);
	mc.addMultiAddressOp(opcodes68HC11["STS"],
		function(mc, memory) {
			var s = mc.registers.getRegister("SP").value;
			memory[0].value = (s >> 8) & 0x00FF;
			memory[1].value = s & 0x00FF;
		},
		2
	);
	mc.addMultiAddressOp(opcodes68HC11["STX"],
		function(mc, memory) {
			var x = mc.registers.getRegister("X").value;
			memory[0].value = (x >> 8) & 0x00FF;
			memory[1].value = x & 0x00FF;
		},
		2
	);
	mc.addMultiAddressOp(opcodes68HC11["STY"],
		function(mc, memory) {
			var y = mc.registers.getRegister("Y").value;
			memory[0].value = (y >> 8) & 0x00FF;
			memory[1].value = y & 0x00FF;
		},
		2
	);
	mc.addMultiAddressOp(opcodes68HC11["LDX"],
		function(mc, memory) {
			mc.registers.getRegister("X").value = (memory[0].value<<8)+memory[1].value;
		}
	);
	mc.addMultiAddressOp(opcodes68HC11["LDY"],
		function(mc, memory) {
			mc.registers.getRegister("Y").value = (memory[0].value<<8)+memory[1].value;
		}
	);
  mc.addMultiAddressOp(opcodes68HC11["TSX"],
    function(mc, memory) {
      mc.registers.getRegister("X").value = mc.registers.getRegister("SP").value + 1;
    }
  );
  mc.addMultiAddressOp(opcodes68HC11["TSY"],
    function(mc, memory) {
      mc.registers.getRegister("Y").value = mc.registers.getRegister("SP").value + 1;
    }
  );
  mc.addMultiAddressOp(opcodes68HC11["TXS"],
    function(mc, memory) {
      mc.registers.getRegister("SP").value = mc.registers.getRegister("X").value - 1;
    }
  );
  mc.addMultiAddressOp(opcodes68HC11["TYS"],
    function(mc, memory) {
      mc.registers.getRegister("SP").value = mc.registers.getRegister("Y").value - 1;
    }
  );
	
	// Return the MicroController object
	return mc;
}
