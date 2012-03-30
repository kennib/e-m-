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
	// Has the value of this element been set?
	// useful for highlighting
	this.set = false;
	
	// MemoryUnit methods
	
	// Getter for value of the MemoryUnit
	this.getValue = function() {
		return this.value;
	}

	// Setter for value of the MemoryUnit
	this.setValue = function(value) {
		this.value = value;
		this.set = true;
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
	this.labelArray = {};

	
	// Memory methods
	
	// Getter for value of the MemoryUnit
	// creates new, default memory if it does not exist yet
	this.getUnit = function(address, create) {
		var unit = this.memoryArray[address];
		
		// If the memory unit doesn't exist
		// Create a new, default unit
		if (!unit && create) {
			unit = new MemoryUnit(address);
			this.memoryArray[address] = unit;
		}
		
		return unit;
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
}
