/*******************************************************
* MicroController Setup - Motorola 68HC11
********************************************************/

function Motorola68HC11() {
	// Create Registers
	var registers = {
		A: new Register(8),
		B: new Register(8),
		X: new Register(16),
		Y: new Register(16),
		SP: new Register(16),
		PC: new Register(16),
		CC: new Register(8)
	};
	
	return new MicroController({
		registers: registers,
		memorySize: 0xFFFF
	});
}


/*******************************************************
* Main Display Setup
********************************************************/

$(document).ready(function() {
	// Create memory object
	//var mem_size = 64000;
	//memory = new Memory(mem_size);

	// Create Microcontroller
	var mc = new Motorola68HC11();
	var memory = mc.memory;
	var registers = mc.registers;

    // Check 50 random memory location chunks
	var chunk_size = 600;
	for (var z=0; z<50; z++) {
		var x = Math.floor(Math.random()*memory.size);
		for (var p=0; p<chunk_size; p++) {
			var unit = memory.getUnit(x+p, true);
			if (unit)
				unit.setValue(z);
		}
	}

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
});

