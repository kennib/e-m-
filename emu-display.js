/*******************************************************
*
* Memory Display Components
*
********************************************************/

/*******************************************************
* Memory Display - Scrollbar
********************************************************/

var MemoryScrollbar = {
	_init: function() {
		// Display properties
		this.id = "memory_scrollbar";
		// The max/min number of memory units that can be in range
		this.max_units = 1000;
		this.min_units = 24;
		
		// Boolean to determine if changing slider values
		this.sliding = false;
	
		// Data properties
		this.memoryObject = memory;

		// Create a container for the memory scrollbar
		this.container = $(document.createElement('div'));
		this.container.attr("id", this.id);
		this.element.append(this.container);

		// Create the slider object
		this.container.slider({
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
	
		// Set a maximum range restriction on scrolling
		this.container.bind("slide", {memoryScrollbar: this},
			function(event, ui) {
				event.data.memoryScrollbar.maxRange(ui);
			}
		);
	},

	// Method adds highlighting to a range in the scrollbar
	addHighlight: function(start, end, style) {
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
	
		this.container.append(hl);
	},

	// Method to get the range given by the scrollbar
	getRange: function() {
		// Get slider values
		var range = this.container.slider("values");

		// Needs to be reversed since the slider has
		// 0 at the bottom instead of the top
		range = [this.memoryObject.size-range[1], this.memoryObject.size-range[0]];

		// Make sure minimum is maintained	
		if (range[1] - range[0] < this.min_units)
			range[1] = range[0] + this.min_units;

		return range;
	},

	// Method to set the range selected by the scrollbar
	setRange: function(start, end) {
		// Needs to be reversed since the slider has
		// 0 at the bottom instead of the top
		var range = [this.memoryObject.size-end, this.memoryObject.size-start];

		// Get slider values
		var range = this.container.slider("values", range);
	},
	
	// Gives the slider a maximum range
	// when a handle is pulled out of the maximum range
	// the other handle is pulled with it
	// Returns if the scroll bar is within the range
	maxRange: function(ui) {
		// Ignore any attempts to restrict range if already doing so
		if (this.sliding)
			return false;

		// Get the index of handle that was used
		var move_handle = $(ui.handle).index();
		// Get the other handle
		var other_handle = null;
		if (move_handle == 1) other_handle = "start"
		else if (move_handle == 2) other_handle = "end";
	
		// Get range size
		var range = this.getRange();
		var start = range[0]; var end = range[1];
		var range_size = end-start;
	
		// Check if outside maximum range
		if (range_size > this.max_units) {
			if (other_handle == "start") start = end-this.max_units;
			if (other_handle == "end") end = start+this.max_units;
		
			// Move the other handle closer
			this.sliding = true;
			this.setRange(start, end);
			this.sliding = false;
		}
		
		return true;
	}
}


/*******************************************************
* Memory Display - Memory Unit
********************************************************/

var MemoryUnitDisplay = {
	_init: function() {
		// Data properties
		this.memoryUnit = this.options.memoryUnit;
	
		// Display properties
		this.id = "memory_unit" + this.memoryUnit.address;

		// Create the DOM element
		var memUnit = $(document.createElement('div'));
		memUnit.attr("id", this.id);
		memUnit.addClass("memory_unit");
		// Give it different style if the unit's data is interesting
		if (this.memoryUnit.set)
			memUnit.addClass("memory_unit_set");
		
		// Add address and value information
		memUnit.append('<span class="address">'+this.memoryUnit.addressHex(4)+'</span>');
		memUnit.append('<span class="value">'+this.memoryUnit.getValue()+'</span>');
	
		this.element.append(memUnit);
	}
}



/*******************************************************
* Memory Display
********************************************************/

var MemoryDisplay = {
	// Function to update the memory units displayed
	// this will be used when the scrollbar is moved
	refreshUnits: function() {
		if (this.memory_units) {
			this.memory_units.empty();
			this.displayUnits();	
		}
	},

	// Method to display relevant memory units
	// based on input from the scrollbar
	displayUnits: function() {
		var range = this.container.MemoryScrollbar("getRange");
		var start = range[0]; var end = range[1];
	
		$.widget("ui.MemoryUnit", MemoryUnitDisplay);
		for (var u=start; u<end; u++) {
			// Get the unit object
			var unit = this.memoryObject.getUnit(u, true);
			
			// Create the unit display object
			$("#memory_units").MemoryUnit({
				memoryUnit: unit
			});
		}
	},
	
	// Method to create the display object
	// takes a parent jquery element as input
	_init: function() {
		// Display
		this.id = "memory_display";
	
		// Data
		this.memoryObject = this.options.memory;
	
		// Subcomponents
		$.widget("ui.MemoryScrollbar", MemoryScrollbar);
		this.memoryUnits = null;


		// Create a container for the memory display
		this.container = $(document.createElement('div'));
		this.container.attr("id", this.id);
		this.element.append(this.container);

		// Create the scrollbar	
		$(this.container).MemoryScrollbar({
			memory: this.memoryObject
		});
	
		// Create div for memory units
		this.memory_units = $(document.createElement('div')).attr("id", "memory_units");
		this.container.append(this.memory_units);
		// Load up memory units
		this.displayUnits();

		// Make units refresh on scroll
		this.container.MemoryScrollbar("container").bind("slidechange", {memoryDisplay: this},
			function(event, ui) {
				var valid = event.data.memoryDisplay.container.MemoryScrollbar("maxRange", ui);
				// Only display units if the slider is in a valid state
				// (i.e., not greater than max range)
				if (valid)
					event.data.memoryDisplay.refreshUnits();
			}
		);
	}
}
