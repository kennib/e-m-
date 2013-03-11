angular.module('68hc11.micro', ['emu'])
.config(function(memoryProvider) {
	memoryProvider.options({
		size: 600,
	});
});
