angular.module('xmlControllers', [])

.controller('xmlControllers', function($scope, $exchangerate) {
	$scope.compra= exchangerate.compra;
	$scope.venta= exchangerate.venta;
	
});