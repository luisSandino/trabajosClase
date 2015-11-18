
var myGrocery = angular.module('myGrocery', ['firebase']);

myGrocery.controller('GroceryListController', 
function GroceryListController($scope, $ItemFactory){


	$scope.items = ItemFactory.getAllItems()
	$scope.newItem = {name:'', quantity:0};
	//$scope.getItemInfo = function(itemID) {
		
	//};


	//Add Item
	$scope.addItem = function() {
		$scope.items.$add($scope.newItem);
		$scope.newItem = {name:'', quantity:0};
		// for Local Storage
		// Just Serialize object and save in LocalStorage
	};


	//Remove Item
	$scope.removeItem = function(toRemove) {
		$scope.items.$remove(toRemove);
	};


	//Update Item
	$scope.updateItem = function(toUpdate, newName, newQuantity) {
		toUpdate.name = newName;
		toUpdate.quantity = newQuantity;
		$scope.items.$save(toUpdate);
	};


});