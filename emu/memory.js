angular.module('emu.memory', [], function() {
})

.factory('create', function(config) {
	// Convert register list to registers object.
	var r = {};
	for(var i = 0; i < config.registers.length; i++) {
		r[config.registers[i]] = undefined;
	}
	
	// Construct actual memory.
	var m = new Array(config.size);
	
	// Memory accessor.
	var at = function(addr, val) {
		if(addr >= 0 && addr < m.length - 1) {
			if(val === undefined) {
				return m[addr];
			} else {
				m[addr] = val;
		} else {
			ERRORR;
		}
	};
	
	// Construct memory service object.
	var mem = {
		at: at,
		register: r,
	};
	return mem;
});
