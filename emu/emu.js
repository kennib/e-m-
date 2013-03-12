angular.module('emu')
.config(function(memoryProvider, editorProvider) {
	memoryProvider.options({
		size: 20,
	});
	editorProvider.options({
	});
});
