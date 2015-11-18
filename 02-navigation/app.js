/*angular.model('navigation', ['ngRoute'])
.config(['$routerPovider', function($routerPovider) {

	.when('/',{
	templateUrl:'views/home.html'
	

	})

	.when('/products',{
	templateUrl:'views/products.html'
	

	})

	.otherwise({
		redirecTo:'/'
	})
	
}]);*/

angular.module('bootstrap', ['ngRoute', 'bootstrap.controllers'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'HomeController'
	})
	.when('/products', {
	    templateUrl: 'views/products.html',
	    controller: 'ProductsController'
	})
	.otherwise({
	  	redirectTo: '/'
	});
}]); 
