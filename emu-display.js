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
		
		// Set default properties
		self.runSpeed = 200;
		
		// Add in controls
		var controls = ["step", "run", "stop", "reset", "speed"];
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
				case "speed":
					symbol = '&#9685; <input type="text" maxlength="4" value="'+self.runSpeed+'"/>';
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
		$("#speed.control input").change(function() {
			controls.setRunSpeed($(this).val());
		});
	},
	
	load: function() {
		// Get the program
		var program = editors["program_assembly"].getSession().getValue().split("\n");

		// No need to do anything if there is no program
		if (!program)
			return;
		
		// Reset the board
		this.microcontroller.reset();
		
		// Get memory
		var m = this.microcontroller.memory;
		
		// Loop through each line in the program
		var opcode_num = 0;
		for (var l in program) {
			var line = program[l];
			
			// Get the address length
			var addr_bytes = parseInt(line[1]);
			if (addr_bytes >= 7) return; // end of file
			addr_bytes = 2*addr_bytes;

			// Get hex memory address
			var addr = parseInt(line.slice(4, 4 + addr_bytes*2), 16);
			
			// Get number of bytes (ignoring checksum byte and address bytes)
			var bytes = parseInt(line.slice(2,4), 16) - 1 - addr_bytes;
			
			var base = 4 + addr_bytes*2;
			// Place bytes in memory
			for (var o=0; o < bytes; o++) {
				var byte = parseInt(line.slice(base+o*2, base+(o+1)*2), 16);
				m.setUnit(addr+o, byte);
			}
		}
	},
	
	step: function() {
		this.microcontroller.stepProgram();
	},

	run: function() {
		if (!this.microcontroller.running) {
			this.microcontroller.running = true;
			var self = this;
			self.runStep = function() {
				self.microcontroller.stepProgram();
				if(self.microcontroller.running)
					programTimeout = setTimeout(self.runStep, self.runSpeed);
			}
			this.runStep();
		}
	},
	
	stop: function() {
		clearTimeout(programTimeout);
		this.microcontroller.running = false;
	},
	
	reset: function() {
		this.microcontroller.reset();
	},
	
	setRunSpeed: function(s) {
		s = parseInt(s);
		if (s) this.runSpeed = s;
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
		
		// Make the register link to its memory address
		var self = this;
		name.click(function(){
			// Round the position to the nearest 8 bytes
			var pos = Math.floor(self.registerObject.value/8)*8;
			$("#memory_display").MemoryScrollbar("setRange", pos);
		});
		
		// Create Select element containing different display modes
		var hex_digits = this.registerObject.bits/4;
		this.menu = $(document.createElement('select'));
		this.menu.addClass('value_display');
		this.menu.append('<option class="value">'+this.registerObject.value+'</option>');
		this.menu.append('<option class="ascii_value">'+this.registerObject.valueChar()+'</option>');
		this.menu.append('<option class="hex_value" selected="selected">&#36;'+this.registerObject.valueHex(hex_digits)+'</option>');
		this.container.append(this.menu);
		
		// Create boxes for register's bits
		var boxes = [];
		for (var b=0; b<this.registerObject.bits; b++) {
			var box = $(document.createElement('input'));
			boxes[b] = box;
			box.attr("size", 1);
			box.attr("maxlength", 1);
			box.addClass("bit_box");
			box.change(function(){ widget.editBits() });
			
			// Select text in box on focus
			box.click(function() { $(this).select(); });
			
			// Make cursor jump from box to box
			if (b != this.registerObject.bits-1) {
				boxes[b].keyup(function() {
					if ($(this).val().length == 1) {
						$(this).next().focus();
						$(this).next().select();
					} else {
						$(this).prev().focus();
						$(this).prev().select();
					}
				});
			} else {
				boxes[b].keyup(function() {
					if ($(this).val().length == 1) {
						$(this).siblings('.bit_box:first').focus();
						$(this).siblings('.bit_box:first').select();
					} else {
						$(this).prev().focus();
						$(this).prev().select();
					}
				});
			}

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
		
		// Update menu
		var hex_digits = this.registerObject.bits/4;
		this.menu.children(".value").html(this.registerObject.value);
		this.menu.children(".ascii_value").html(this.registerObject.valueChar());
		this.menu.children(".hex_value").html('&#36;'+this.registerObject.valueHex(hex_digits));
	},
	
	// Method to update register data when bits are editted
	editBits: function() {
		var bits = "";
		this.container.children(".bit_box").each(function() {
			bits += $(this).val();
		});
		
		var byte = parseInt(bits, 2);
		this.registerObject.value = byte;
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
		this.max_units = 0x200;
		this.min_units = 0x20;
		
		// Boolean to determine if changing slider values
		this.sliding = false;
	
		// Data properties
		this.memoryObject = this.options.memory;

		// Create a container for the memory scrollbar
		this.container = $(document.createElement('div'));
		this.container.attr("id", this.id);
		this.element.append(this.container);

		// Create the slider object
		this.slider = $(document.createElement('div'));
		this.slider.attr("id", "memory_slider");
		this.container.append(this.slider);
		
		this.slider.slider({
			orientation: 'vertical',
			range: true,
			min: 0,
			max: this.memoryObject.size,
			values: [this.memoryObject.size-100, this.memoryObject.size]
		});
		
		// Highlight defined memory ranges
		ranges = this.memoryObject.getMemoryMap();	
		for (r in ranges) {
			range = ranges[r];
			// Add label with memory_map class and
			// the name of the range as the title
			this.addHighlight(range.start, range.end, "memory_map", range.name);
		}
		
		// Highlight changed memory
		ranges = this.memoryObject.getUnitRanges();	
		for (r in ranges) {
			range = ranges[r];
			// Add label with data class
			this.addHighlight(range[0], range[1], "data");
		}
	
		// Set a maximum range restriction on scrolling
		this.container.bind("slide", {memoryScrollbar: this},
			function(event, ui) {
				event.data.memoryScrollbar.maxRange(ui);
			}
		);

		// Create inputs for scrollbar positions
		this.slider.before('#<input id="memory_start" title="Range Start" maxlength="4"/>');
		this.slider.after('#<input id="memory_size" title="Range Size" maxlength="4"/>');
		this.text_start = $("#memory_start");
		this.text_size = $("#memory_size");
		// Make scrollbar update when inputs modified
		var self = this;
		var scroll_update = function() {
			var start = parseInt(self.text_start.val(), 16);
			var size = parseInt(self.text_size.val(), 16);
			self.setRange(start, start+size);
		};
		this.text_start.change(scroll_update);
		this.text_size.change(scroll_update);
		
		
		// Set initial scrollbar range
		this.setRange(0x0000, 0x0100);
		
	},

	// Method adds highlighting to a range in the scrollbar
	addHighlight: function(start, end, style, title) {
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
		
		// Add title
		if (title) hl.attr("title", title);
		
		this.slider.append(hl);
	},

	// Method to get the range given by the scrollbar
	getRange: function() {
		// Get slider values
		var range = this.slider.slider("values");
		
		// Needs to be reversed since the slider has
		// 0 at the bottom instead of the top
		range = [this.memoryObject.size-range[1], this.memoryObject.size-range[0]];
		
		return range;
	},

	// Method to set the range selected by the scrollbar
	setRange: function(start, end) {
		if (end == undefined) { end = start + this.min_units; }
		
		// Ensure correct range
		if (end >= this.memoryObject.size) end = this.memoryObject.size;
		if (start < 0) start = 0;
		
		// Ensure number of units
		if (end - start > this.max_units) end = start + this.max_units;
		if (end - start < this.min_units) {
			if (this.memoryObject.size-end > this.min_units) {
				end += this.min_units;
			} else {
				end = this.memoryObject.size;
				start = this.memoryObject.size - this.min_units;
			}
		}
		
		// Needs to be reversed since the slider has
		// 0 at the bottom instead of the top
		var range = [this.memoryObject.size-end, this.memoryObject.size-start];
		
		// Set slider values
		this.slider.slider("values", range);
		
		// Update textboxes
		range = this.getRange();
		start = range[0].toHex(4);
		size = (range[1]-range[0]).toHex(4);
		this.text_start.val(start);
		this.text_size.val(size);
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
		this.element.append(memUnit);

		// Create Select element containing different display modes
		var menu = $(document.createElement('select'));
		menu.addClass('value_display');
		menu.append('<option class="value">'+this.memoryUnit.value+'</option>');
		menu.append('<option class="ascii_value">'+this.memoryUnit.valueChar()+'</option>');
		menu.append('<option class="hex_value" selected="selected">&#36;'+this.memoryUnit.valueHex(2)+'</option>');
		memUnit.append(menu);
		
		
		// Add address and value information when value changes
		this.memoryUnit.onValueChanged = function () {
			// Give it different style if the unit's data is interesting
			if (this.set)
				memUnit.addClass("memory_unit_set");
			// Change data
			menu.children(".value").html(this.value);
			menu.children(".ascii_value").html(this.valueChar());
			menu.children(".hex_value").html('&#36;'+this.valueHex(2));
		};
		
		this.memoryUnit.onValueChanged();
	}
}



/*******************************************************
* Memory Display
********************************************************/

var MemoryDisplay = {
	_init: function() {
	},
	
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
		

		var self = this;
		
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
		
		// Make units refresh when changed
		this.memoryObject.onValueChanged = function() {
			self.refreshUnits();
			self.displayLabels();
		};
	}
}
