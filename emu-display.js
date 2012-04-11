/*******************************************************
*
* Control display
*
********************************************************/

var ControlDisplay = {
	_init: function(options) {
		// Display properties
		this.id = "control_display";
		
		// Data properties
		this.microcontroller = this.options.microcontroller;
		
		// Create a menu
		this.menu = $(document.createElement('menu'));
		this.menu.attr("id", this.id);
		this.element.append(this.menu);
		
		// Add in controls
		var controls = ["load", "step", "run", "stop", "reset"];
		for (c in controls) {
			var symbol = controls[c];
			switch(controls[c]) {
				case "load":
					symbol = "&#x27A6";
					break;
				case "step":
					symbol = "&#x25B7";
					break;
				case "run":
					symbol = "&#x25B6";
					break;
				case "stop":
					symbol = "&#x25A0";
					break;
				case "reset":
					symbol = "&#x25C9";
					break;
			}
			this.menu.append('<li class="control" id="'+controls[c]+'" title="'+controls[c]+'">'+symbol+'</li>');
		}
		
		var controls = this;
		// Add control functionality
		$("#load.control").click(function() {
			controls.load();
		});
		$("#step.control").click(function() {
			controls.step();
		});
		$("#run.control").click(function() {
			controls.run();
		});		
		$("#stop.control").click(function() {
			controls.stop();
		});		
		$("#reset.control").click(function() {
			controls.reset();
		});		
	},
	
	load: function() {
		var program = $("#program_opcodes textarea").val().split("\n");

		if (!program)
			return;

		var m = this.microcontroller.memory;
		
		var opcode_num = 0;
		for (line in program) {
			var opcodes = program[line].split(" ");
			for (o in opcodes) {
				var opcode = parseInt(opcodes[o], 16);
				if (opcode) {
					m.setUnit(opcode_num, opcode);
					opcode_num++;
				}
			}
		}
	},
	
	step: function() {
		this.microcontroller.stepProgram();
	},
	
	run: function() {
		this.running = true;
		while(this.running)
			this.microcontroller.stepProgram();
	},
	
	stop: function() {
		this.running = false;
	},
		
	reset: function() {
		this.microcontroller.programCounter.setValue(0);
	}
}


/*******************************************************
*
* Register Display Components
*
********************************************************/

/*******************************************************
* Registers Display - Register Display
********************************************************/

var RegisterDisplay = {
	_init: function(options) {
		// Display properties
		this.id = "register_"+this.options.registerName;

		// Data properties
		this.registerObject = this.options.register;
		
		// Create a container for the registers
		this.container = $(document.createElement('div'));
		this.container.attr("id", this.id);
		this.container.addClass("register");
		this.element.append(this.container);
		
		
		var widget = this;
		this.registerObject.change(function(){
			widget.displayBits();
		});
		
		// Add in a name
		var name = $(document.createElement('span'));
		name.addClass("register_name");
		name.html(this.options.registerName);
		this.container.append(name);
		
		// Create boxes for register's bits
		for (var b=0; b<this.registerObject.bits; b++) {
			var box = $(document.createElement('input'));
			box.attr("size", 1);
			box.attr("maxlength", 1);
			box.addClass("bit_box");
			box.change(function(){ widget.editBits() });
			
			this.container.append(box);
		}
		
		this.displayBits();
	},
	
	// Method to display the bits of the register
	displayBits: function() {
		var bits = this.registerObject.getBits();
		this.container.children(".bit_box").each(function(index) {
			$(this).val(bits[index]);
		});
	},
	
	// Method to update register data when bits are editted
	editBits: function() {
		var bits = "";
		this.container.children(".bit_box").each(function() {
			bits += $(this).val();
		});
		
		var byte = parseInt(bits, 2);
		this.registerObject.setValue(byte);
	}
}

/*******************************************************
* Registers Display
********************************************************/

var RegistersDisplay  = {
	_init: function() {
		// Display properties
		this.id = "register_display";

		// Data properties
		this.registersObject = this.options.registers;
		
		// Create a container for the registers
		this.container = $(document.createElement('div'));
		this.container.attr("id", this.id);
		this.element.append(this.container);

		// Create Register widget
		$.widget("ui.registerDisplay", RegisterDisplay);
	
		// Create Registers
		for (register in this.registersObject.registers) {
			var widget = $(document.createElement('div'));
			this.container.append(widget);
			
			widget.registerDisplay({
				register: this.registersObject.registers[register],
				registerName: register
			});
		}
	}
}


/*******************************************************
*
* Memory Display Components
*
********************************************************/

/*******************************************************
* Labels Display - Memory Units
********************************************************/

var LabelDisplay = {
	_init: function (options) {
		// Data properties
		this.labelObject = this.options.label;
		// Display properties
		this.id = "label_" + this.labelObject.name;

		// Create the label
		this.element.attr("id", this.id);
		this.element.addClass("label");
		this.element.html(this.labelObject.name);
	},
};


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
		this.memoryObject = this.options.memory;

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
		memUnit.append('<span class="address">'+this.memoryUnit.addressHex(4)+'</span>');
		memUnit.append('<span class="value">'+this.memoryUnit.getValue()+'</span>');
		this.element.append(memUnit);
		
		
		// Add address and value information when value changes
		this.memoryUnit.onValueChanged = function () {
			// Give it different style if the unit's data is interesting
			if (this.set)
				memUnit.addClass("memory_unit_set");
			// Change data
			memUnit.children(".value").html(this.getValue());
		};
		
		this.memoryUnit.onValueChanged();
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
			
			var memUnit = $(document.createElement('div'));
			$("#memory_units").append(memUnit);
			// Create the unit display object
			memUnit.MemoryUnit({
				memoryUnit: unit
			});
		}
	},
	
	// Method to display the labels
	displayLabels: function() {
		// Remove old labels
		$(".label").remove();
		
		// Create new labels
		var range = this.container.MemoryScrollbar("getRange");
		var start = range[0]; var end = range[1];
		
		for (var l in this.labels) {
			var label = this.labels[l];
			if (label.address<end && label.address >= start) {
				var labelDisp = $(document.createElement('span'));
				$("#memory_unit"+label.address).append(labelDisp);
				
				labelDisp.MemoryLabel({
					label: label
				});
			}
		}
	},
	
	// Method to create the display object
	// takes a parent jquery element as input
	_init: function() {
		// Display
		this.id = "memory_display";
	
		// Data
		this.memoryObject = this.options.memory;
		this.labels = this.memoryObject.labelArray;
		
		// Subcomponents
		$.widget("ui.MemoryScrollbar", MemoryScrollbar);
		this.memoryUnits = null;
		$.widget("ui.MemoryLabel", LabelDisplay);

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

		// Create the labels
		this.displayLabels();
		
		// Make the labels update when their address is changed
		var memDisp = this;
		for (var l in this.labels) {
			var label = this.labels[l];
			label.change(function(label) {
				memDisp.displayLabels();
			});
		}

		// Make units refresh on scroll
		this.container.MemoryScrollbar("container").bind("slidechange", {memoryDisplay: this},
			function(event, ui) {
				var valid = event.data.memoryDisplay.container.MemoryScrollbar("maxRange", ui);
				// Only display units if the slider is in a valid state
				// (i.e., not greater than max range)
				if (valid) {
					event.data.memoryDisplay.refreshUnits();
					event.data.memoryDisplay.displayLabels();
				}
			}
		);
		
		
	}
}
