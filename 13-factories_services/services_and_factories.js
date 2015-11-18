myGrocery.factory('Item', function($firebaseObject, $firebaseArray){

	var fireRef = new Firebase('https://groceryappsandino.firebaseio.com');
	return {
		getAllItems : function(){
			return firebaseArray(fireRef);
		}
	}
	
});