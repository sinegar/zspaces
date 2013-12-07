'user strict';

angular.module('zspaces').config(function ($routeProvider) {

	$routeProvider.when('/list', {
		controller: 'listCtrl', 
		templateUrl: 'html/list/list.html'
	});
});
