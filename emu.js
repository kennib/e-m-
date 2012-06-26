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
	
	// Create the controls for the microcontroller
	$.widget("ui.controls", ControlDisplay);
	$("#control_block").controls({
		microcontroller: mc
	});
	
	// Create the tabbed program editor
	$("#program_editor").tabs({
		// Assemble program when assembly tab is opened
		select: function(event, ui) {
			var tab = $(ui.tab);
			
			if (tab.parent().attr("id") == "assemble") {
				// Get the assembled source code
				var source = editors["program_source"].getSession().getValue();
				var request = $.ajax({
					url: "assemblers/index.cgi",
					data: {source: source, instructions: "68HC11"},
					dataType: "json"
				});
				
				// Place assembled code in text box
				request.done( function(results) {
					assembly = results["assembly"];
					editors["program_assembly"].getSession().setValue(assembly);
					listing = results["listing"];
					editors["program_listing"].getSession().setValue(listing);
				});
				
			}
		},
		show: function(event, ui) {
			// Small Hack to fix jQuiry UI / Ace editor shenanigans
			for (var e in editors) { editors[e].resize(); }

			var panel = $(ui.panel);
			
			// The index of the assembly tab
			var assembly_index = 2;
			
			if (panel.attr("id") == "program_assembly" && ui.index != assembly_index) {
				// Select assembly tab
				$(this).tabs("select", assembly_index);
			}
		}
	});
	
	
	//basicProgram()
});
