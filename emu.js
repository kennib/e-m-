/*******************************************************
* Main Display Setup
********************************************************/

function basicProgram() {
	// LDAA
	mc.memory.setUnit(0x00, 0x18);
	mc.memory.setUnit(0x01, 0xA6);
	// with value at 0xF0
	mc.memory.setUnit(0x02, 0xF0);
	// which is 0xAA
	mc.memory.setUnit(0xF0, 0xAA);
	// Set X to 0x000F
	mc.registers.getRegister("X").setValue(0xF00F);

	mc.memory.setUnit(0xFF, 0x08);
	// Run
	mc.stepProgram();
	
	console.log("Running basic Program");
	
	// result
	var a = mc.registers.getRegister("A").getBits();
	console.log("Register A:" + a);
}

function basicProgram2() {
	// LDD 1,X
	mc.memory.setUnit(0x00, 0xEC);
	mc.memory.setUnit(0x01, 0x01);
	// Set X to 0x0004, so we load D with 0x05 - 0x06
	mc.registers.getRegister("X").setValue(0x0004);
	// Which is 0x10AA
	mc.memory.setUnit(0x05, 0xAA);
	mc.memory.setUnit(0x06, 0x10);

	// Run
	mc.stepProgram();
	
	console.log("Running basic program 2");
}

$(document).ready(function() {
	// Create memory object
	//var mem_size = 64000;
	//memory = new Memory(mem_size);
	
	// Create Microcontroller
	mc = new Motorola68HC11();
	var memory = mc.memory;
	var registers = mc.registers;

	// Create display for memory object
	$.widget("ui.MemoryDisplay", MemoryDisplay);
	// Create the display on the page
	$("#memory_block").MemoryDisplay({
		memory: memory
	});
	
	// Create display for the registers
	$.widget("ui.registers", RegistersDisplay);
	// Create the display on the page
	$("#register_block").registers({
		registers: registers
	});
	
	// Create the display for the clocks
	$.widget("ui.clocks", ClocksDisplay);
	$("#clock_block").clocks({
		microcontroller: mc
	});
	
	// Create the controls for the microcontroller
	$.widget("ui.controls", ControlDisplay);
	var controller = $("#control_block").controls({
		microcontroller: mc
	});

	// Create the tabbed program editor
	$("#program_editor").tabs({
		select: function(event, ui) {
			var tab = $(ui.tab);
			
			var tab_id = tab.parent().attr("id");
			
			if (tab_id == "assemble" || tab_id == "assemble_load") {
				// Get the assembled source code
				var source = editors["program_source"].getSession().getValue();
				var request = $.ajax({
					url: "assemblers/index.cgi",
					data: {source: source, instructions: "68HC11"},
					dataType: "json"
				});
				
				// Place assembled code in text box
				request.done( function(results) {
					error = results["error"]
					if (error)
						editors["program_listing"].getSession().setValue(error);
					
					assembly = results["assembly"];
					if (assembly)
						editors["program_assembly"].getSession().setValue(assembly);
					
					listing = results["listing"];
					if (listing)
						editors["program_listing"].getSession().setValue(listing);
					
					if (tab_id == "assemble_load") {
						$("#control_block").controls('load');
					};
				});
			}
			
			if (tab_id == "load") {
				$("#control_block").controls('load');
			};
		},
		show: function(event, ui) {
			// Small Hack to fix jQuery UI / Ace editor shenanigans
			for (var e in editors) { editors[e].resize(); }

			var panel = $(ui.panel);
			
			// The index of the listing tab
			var listing_index = 3;
			
			// Select the listing tab if on the listing panel
			if (panel.attr("id") == "program_listing" && ui.index != listing_index) {
				// Select assembly tab
				$(this).tabs("select", listing_index);
			}
		}
	});
	
	
	//basicProgram()
});
