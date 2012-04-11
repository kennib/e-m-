/*******************************************************
* Register Object
* 
* Has a size (bits) and values
* Method to get a list of bits in its value
********************************************************/

function Register(bits, index) {
	// Register Properties
	this.bits = bits;
	this.value = 0;
	this.changeCallbacks = [];
	// Is this register refer to a location memory?
	if (index)
		this.index = true;
	
	// Register Methods
	
	// Method to add functions to value changed callback
	// or execute all of the callbacks
	this.change = function (f) {
		if (f) {
			this.changeCallbacks.push(f);
		} else {
			for(var f in this.changeCallbacks)
				this.changeCallbacks[f](this);
		}
			
	};
	
	// Getter for the register's value
	this.getValue = function() {
		return this.value;
	}

	// Setter for the register's value
	this.setValue = function(value) {
		this.value = value;
		this.change();
	}

	// Convenience method to increment a register's value
	this.incValue = function() {
		this.setValue(this.getValue()+1);
	}
	
	// Method to get bits in Register's value
	this.getBits = function() {
		var bits = [];
		for (var b=0; b<this.bits; b++) {
			var bit = (this.value >> b) & 1;
			bits.unshift(bit);
		}
		
		return bits;
	}
}

/*******************************************************
* Registers Object
* 
* Contains references to all the registers
********************************************************/

function Registers(registers) {
	// Register Properties
	
	// Associative Array for register
	this.registers = registers;
	
	// Register Methods
	
	// Getter for a register by name
	this.getRegister = function(name) {
		return this.registers[name];
	}
}

/*******************************************************
* Label Object
* 
* Has a name and a memory address
* Getters and setters to change the location it labels
********************************************************/

function Label(name, address) {
	// Label properties
	this.name = name;
	this.address = address;
	this.changeCallbacks = [];
	
	// Label methods
	
	// Method to add functions to value changed callback
	// or execute all of the callbacks
	this.change = function (f) {
		if (f) {
			this.changeCallbacks.push(f);
		} else {
			for(var f in this.changeCallbacks)
				this.changeCallbacks[f](this);
		}
			
	};

	// Getter for the Label's address
	this.getAddress = function() {
		return this.address;
	}

	// Setter for the Label's address
	this.setAddress = function(address) {
		this.address = address;
		this.change();
	}
}

/*******************************************************
* MemoryUnit Object
* 
* Has a value and a memory address
* Getters and setters for memory's value
********************************************************/

function MemoryUnit(address) {
	// MemoryUnit properties
	this.address = address;
	this.value = 0;	
	// Has the value of this element been set?
	// useful for highlighting
	this.set = false;
	
	// Callback for when values are updated
	this.onValueChanged = null;
	
	// MemoryUnit methods
	
	// Getter for value of the MemoryUnit
	this.getValue = function() {
		return this.value;
	}

	// Setter for value of the MemoryUnit
	this.setValue = function(value) {
		this.value = value;
		this.set = true;
		
		if (this.onValueChanged)
			this.onValueChanged();
	}

	// Returns the unit's address in hex
	// pads with leading zeros if given parameter
	this.addressHex = function(padding) {
		if (!padding) padding = 0;
		for (var pad=""; pad.length < padding; pad+="0");
		
		var hex = this.address.toString(16).toUpperCase();
		
		return (pad+hex).slice(-padding);
	}
}

/*******************************************************
* Memory Object
* 
* Stores the memory and its corresponding labels
* Has a function to access memory at any given address
********************************************************/

function Memory(size) {
	// Memory properties
	this.size = size;
	this.memoryArray = Array(size);
	this.labelArray = [];
	
	// Memory methods
	
	// Getter for value of the MemoryUnit
	// creates new, default memory if it does not exist yet
	this.getUnit = function(address, create) {
		// Check that address is in range
		if (!(address < this.size))
			return null;

		var unit = this.memoryArray[address];
		
		// If the memory unit doesn't exist
		// Create a new, default unit
		if (!unit && create) {
			unit = new MemoryUnit(address);
			this.memoryArray[address] = unit;
		}
		
		return unit;
	}
	
	// Setter for value of the MemoryUnit
	// creates new memory unit if it doesn't exist yet
	this.setUnit = function(address, value) {
		// Check that address is in range
		if (!(address < this.size))
			return null;

		var unit = this.memoryArray[address];

		// Create new unit if one doesn't exist
		if (!unit) {
			unit = new MemoryUnit(address);
			this.memoryArray[address] = unit;
		}
		
		// Set value
		unit.setValue(value);
		
		return value;
	}
	
	
	// Returns the ranges of units of memory that have been explicitly set
	// Format is a list of lists of length 2 containing start and end addresses
	// useful for the memory display scrollbar
	this.getUnitRanges = function() {
		var ranges = [];
		var range = null;
		
		// Loop through each defined unit of memory
		for (u in this.memoryArray) {
			u = parseInt(u);
			
			// If there is no range, set it to the current Unit
			if (!range) {
				range = [u, u];
			}
			// Else check if the unit is not adjacent to
			// the last item in the curren range
			// or if it has not been explicilty set
			else if (u != ++range[1] || !this.memoryArray[u].set) {
				// Store this range
				ranges.push(range);
				// Start new range
				range = [u, u];
			}
		}
		
		if (range) {
			range[1]++;
			ranges.push(range);		
		}
		
		return ranges;
	}
	
	// Adds the label to the memory object's array of labels
	this.addLabel = function(label) {
		this.labelArray.push(label);
	}
}


/*******************************************************
* MicroController Object
* 
* Contains references to the MicroController's registers and memory
* Contains a set of operations for the MicroController
* Has a method to step through the program
********************************************************/

function MicroController(properties) {
	// MicroController Components
	this.registers = properties.registers;
	this.memory = new Memory(properties.memorySize);
	this.ops = properties.operations;
	
	
	this.programCounter = properties.programCounter;
	
	
	// Method to complete 1 step of a program
	this.stepProgram = properties.stepProgram;
}


/*******************************************************
* Operation Object
* 
* Has a list of OpCodes, a number of clocks,
* 	a number of bytes for a particular macro
* Runs specific actions called by MicroController object
*	is given a MicroController object and bytes
********************************************************/

function Operation(properties, operation) {
	// Operation Properties
	this.macro = properties.macro;
	this.opcode = properties.opcode;
	this.clocks = properties.clocks;
	this.bytes = properties.bytes;
	
	// Method to evaluate the operation
	// Applied to a specific MicroController
	this.execute = operation;
}

/*******************************************************
* OperationSet Object
* 
* Keeps a reference to a set of operations
* Has methods for creating multiple operations from
*	a single macro with multiple adressing options
********************************************************/

function OperationSet() {
	// OperationSet properties
	this.operations = new Array();
	
	// Method to add a new operation
	this.addOp = function(operation) {
		var opCode = operation.opcode;
		this.operations[opCode.toString()] = operation;
	}
	
	// Method to get an operation
	this.getOp = function(opCode) {
		return this.operations[opCode.toString()];
	}
}
