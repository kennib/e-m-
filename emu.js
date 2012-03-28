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
	
	// Label methods
	
	// Getter for the Label's address
	this.getAddress = function() {
		return this.address;
	}

	// Setter for the Label's address
	this.setAddress = function(address) {
		this.address = address;
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
	
	
	// MemoryUnit methods
	
	// Getter for value of the MemoryUnit
	this.getValue = function() {
		return this.value;
	}

	// Setter for value of the MemoryUnit
	this.setValue = function(value) {
		this.value = value;
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
	this.labelArray = {};

	
	// Memory methods
	
	// Getter for value of the MemoryUnit
	// creates new, default memory if it does not exist yet
	this.getUnit = function(address) {
		var unit = this.memoryArray[address];
		
		// If the memory unit doesn't exist
		// Create a new, default unit
		if (!unit) {
			unit = new MemoryUnit(address);
			this.memoryArray[address] = unit;
		}
		
	}
}
