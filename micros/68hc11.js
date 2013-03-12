angular.module('68hc11.micro', ['emu'])
.config(function(memoryProvider, editorProvider) {
	memoryProvider.options({
		size: 600,
	});
	editorProvider.options({
		mode: 'asm68hc11',
		value: 'org $8800\n\nldaa #$0000  * Load value 0',
	});
});

CodeMirror.defineMode('asm68hc11', function() {
	return {
		token: function(stream) {
			if(stream.eatSpace()) return null;
			
			if(stream.peek() == '*') {
				stream.skipToEnd();
				return 'comment';
			}
			
			return stream.next();
		},
	};
});
