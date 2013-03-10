var module = angular.module('micro.68hc11', ['emu.memory']);
module.value('memorySize', 20);
module.value('registers', ['a']);

module.controller('68hc11controller',
function($scope, memoryFactory, memorySize, registers) {
	$scope.memory = memoryFactory({
		size: memorySize,
		registers: registers,
	});
});
