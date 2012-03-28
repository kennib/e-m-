/*******************************************************
* Memory Display
********************************************************/

function MemoryDisplay(memory) {
	this.memoryObject = memory;
	this.scrollbar = null;
	
	// Method to create the display object
	// takes a parent jquery element as input
	this.create = function(parent) {
		html = '<div id="memory_display"> \
					<div id="memory_scrollbar"> </div>\
				</div>';
		parent.append(html);
		$("#memory_scrollbar").slider({
			orientation: 'vertical',
			min: 0,
			max: memory.size,
			value: 0
		});
		
		this.scrollbar = $("#memory_scrollbar").slider;
	}
}


/*******************************************************
* Main Display Setup
********************************************************/

$(document).ready(function() {
	// Create memory object
	var memory = new Memory(200);
	// Create display for memory object
	var memoryDisplay = new MemoryDisplay(memory);
	// Create the display on the page
	memoryDisplay.create($("#memory_block"));	
});

