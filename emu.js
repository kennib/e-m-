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
    $.widget("ui.MemoryDisplay", MemoryDisplay);
    // Create the display on the page
    $("#memory_block").MemoryDisplay({
        memory: memory
    });
});

