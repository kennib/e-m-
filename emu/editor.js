var emu = angular.module('emu');

emu.provider('editor',
function() {
	this.mode = 'text';
	this.value = '';
	self.mirror = null;
	this.options = function(o) {
		if(!o) return;
		if(o.mode) this.mode = o.mode;
		if(o.value) this.value = o.value;
	};
	
	this.$get = function() {
		var self = this;
		return {
			create: function() {
				self.mirror = CodeMirror(
					document.getElementById('editor'),
					{
						value: self.value,
						mode: self.mode,
					}
				);
			},
		};
	};
});

emu.controller('Editor',
function($scope, editor) {
	console.log('creating');
	editor.create();
	console.log('created');
});
