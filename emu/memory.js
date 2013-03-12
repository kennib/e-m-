// This line creates the module. Probably should be done somewhere else.
var emu = angular.module('emu', []);

emu.provider('memory',
function() {
	this.init = function(s) {
		this.size = s;
		this.all = new Array(s);
	};
	
	this.init(10);
	this.registers = {};
	this.options = function(o) {
		if(!o) return;
		if(o.size) this.init(o.size);
	};
	
	this.$get = function() {
		var self = this;
		return {
			at: function(idx, val) {
				    if(idx >= 0 && idx < self.size) {
					    if(val === undefined) {
						    return self.all[idx];
					    } else {
						    self.all[idx] = val;
						    return self;
					    }
				    } else {
					    console.log('Cannot access index', idx, 'of memory with size', self.size);
				    }
			    },
			all: function() { return self.all; },
			range: function(from, to) { return self.all.slice(from, to); },
			size: function() { return self.size; },
		};
	};
});

emu.controller('MemoryDisplay',
function($scope, memory) {
	$scope.memory = memory;
});

emu.filter('default', function() {
	return function(text, def) {
		if(text === undefined) return def;
		else return text;
	};
});
