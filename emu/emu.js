angular.module('emu')
.config(function(memoryProvider) {
	console.log('configuring emu');
	memoryProvider.options({
		size: 20,
	});
});
