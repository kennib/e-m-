/*******************************************************
*
* Display Object Base
*
********************************************************/

function displayObject() {
	this.id;
	
	this.jqueryObj = function() {
		return $("#"+this.id);
	};
}

/*******************************************************
*
* Memory Display Components
*
********************************************************/

/*******************************************************
* Memory Display - Scrollbar
********************************************************/

function MemoryScrollbar(memory) {
	// Display properties
	this.id = "memory_scrollbar";

	// Data properties
	this.memoryObject = memory;
}

MemoryScrollbar.inherits(displayObject);

// Method adds highlighting to a range in the scrollbar
MemoryScrollbar.method('addHighlight', function(start, end, style) {
	var hl = $(document.createElement('span'));
	hl.addClass(style + " scrollbar_highlight");
	
	// Get starting point and size as a % of of overall memory
	var size = this.memoryObject.size;
	var start_pc = 100*start/size;
	var size_pc = 100*(end-start)/size;
	
	// Get pixel value
	var top = start_pc;
	var height = size_pc;
	
	hl.css({
		'top': top+'%',
		height: height+'%'
	});
	
	this.jqueryObj().append(hl);
});

// Method to get the range given by the scrollbar
MemoryScrollbar.method('getRange', function() {
	// Get slider values
	var range = this.jqueryObj().slider("values");
	
	// Needs to be reversed since the slider has
	// 0 at the bottom instead of the top
	return [this.memoryObject.size-range[1], this.memoryObject.size-range[0]];
});


// Method to create the display object
// takes a parent jquery element as input
MemoryScrollbar.method('create', function(parent) {
	html = '<div id="' + this.id + '"> </div>';
	parent.append(html);		

	this.jqueryObj().slider({
		orientation: 'vertical',
		range: true,
		min: 0,
		max: this.memoryObject.size,
		values: [this.memoryObject.size-100, this.memoryObject.size]
	});

	ranges = this.memoryObject.getUnitRanges();	
	for (r in ranges) {
		range = ranges[r];
		this.addHighlight(range[0], range[1], "data");
	}
});

/*******************************************************
* Memory Display - Memory Unit
********************************************************/

function MemoryUnitDisplay(memoryUnit) {
	// Data properties
	this.memoryUnit = memoryUnit;

	// Display properties
	this.id = "memory_unit" + this.memoryUnit.address;
}

MemoryUnitDisplay.inherits(displayObject);

// Method to create the display object
// takes a parent jquery element as input
MemoryUnitDisplay.method('create', function(parent) {
	var memUnit = $(document.createElement('div'));
	memUnit.addClass("memory_unit");
	if (this.memoryUnit.set)
		memUnit.addClass("memory_unit_set");
	memUnit.attr("id", this.id);
	memUnit.append('<span class="address">'+this.memoryUnit.addressHex()+'</span>');
	memUnit.append('<span class="value">'+this.memoryUnit.getValue()+'</span>');
	
	parent.append(memUnit);
});



/*******************************************************
* Memory Display
********************************************************/

function MemoryDisplay(memory) {
	// Display
	this.id = "memory_display";

	// Data
	this.memoryObject = memory;

	// Subcomponents
	this.scrollbar = new MemoryScrollbar(memory);
	this.memoryUnits = null;
}

MemoryDisplay.inherits(displayObject);

// Function to update the memory units displayed
// this will be used when the scrollbar is moved
MemoryDisplay.method('refreshUnits', function() {
	if (this.memory_units) {
		this.memory_units.empty();
		this.displayUnits();	
	}
});

// Method to display relevant memory units
// based on input from the scrollbar
MemoryDisplay.method('displayUnits', function() {
	var range = this.scrollbar.getRange();
	var start = range[0]; var end = range[1];
	
	for (var u=start; u<end; u++) {
		var unit = this.memoryObject.getUnit(u, true);
		var unit_display = new MemoryUnitDisplay(unit);
		
		unit_display.create($("#memory_units"));
	}
});
	
// Method to create the display object
// takes a parent jquery element as input
MemoryDisplay.method('create', function(parent) {
	html = '<div id="' + this.id + '"></div>';
	parent.append(html);
	
	this.scrollbar.create(this.jqueryObj());
	
	// Create div for memory units
	this.memory_units = $(document.createElement('div')).attr("id", "memory_units");
	this.jqueryObj().append(this.memory_units);
	// Load up memory units
	this.displayUnits();

	// Make units refresh on scroll
	this.scrollbar.jqueryObj().bind("slidechange", {memoryDisplay: this},
		function(event, ui) {
			event.data.memoryDisplay.refreshUnits();
		}
	);
});

/*******************************************************
* Main Display Setup
********************************************************/

$(document).ready(function() {
	// Create memory object
	var mem_size = 64000;
	memory = new Memory(mem_size);

	// Check 50 random memory location chunks
	var chunk_size = 600;
	for (var z=0; z<50; z++) {
		var x = Math.floor(Math.random()*mem_size);
		for (var p=0; p<chunk_size; p++) {
			var unit = memory.getUnit(x+p, true);
			unit.setValue(z);
		}
	}

	// Create display for memory object
	memoryDisplay = new MemoryDisplay(memory);
	// Create the display on the page
	memoryDisplay.create($("#memory_block"));	
});

