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
* Memory Display Scrollbar
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


// Method to create the display object
// takes a parent jquery element as input
MemoryScrollbar.method('create', function(parent) {
	html = '<div id="' + this.id + '"> </div>';
	parent.append(html);		

	$("#"+this.id).slider({
		orientation: 'vertical',
		range: true,
		min: 0,
		max: this.memoryObject.size,
		values: [0, this.memoryObject.size/5]
	});

	ranges = this.memoryObject.getUnitRanges();	
	for (r in ranges) {
		range = ranges[r];
		this.addHighlight(range[0], range[1], "data");
	}
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
}

MemoryDisplay.inherits(displayObject);
	
// Method to create the display object
// takes a parent jquery element as input
MemoryDisplay.method('create', function(parent) {
	html = '<div id="' + this.id + '"></div>';
	parent.append(html);
	
	this.scrollbar.create(this.jqueryObj());
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
			memory.getUnit(x+p);
		}
	}

	// Create display for memory object
	memoryDisplay = new MemoryDisplay(memory);
	// Create the display on the page
	memoryDisplay.create($("#memory_block"));	
});

