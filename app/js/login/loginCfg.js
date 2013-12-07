'user strict';

angular.module('zspaces').config(function ($routeProvider) {

	$routeProvider.when('/login', {
		controller: 'loginCtrl', 
		templateUrl: 'html/login/login.html'
	});

});
