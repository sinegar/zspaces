'user strict';

angular.module('zspaces').config(function ($routeProvider) {

	$routeProvider.when('/ad/create', {
		controller: 'adCreateCtrl', 
		templateUrl: 'html/ad/create.html'
	});

	$routeProvider.when('/ad/list', {
		controller: 'adListCtrl', 
		templateUrl: 'html/ad/list.html'
	});
});
