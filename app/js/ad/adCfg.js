'user strict';

angular.module('zspaces').config(function ($routeProvider) {

	$routeProvider.when('/create', {
		controller: 'adCreateCtrl', 
		templateUrl: 'html/ad/create.html'
	});

	$routeProvider.when('/', {
		controller: 'adListCtrl', 
		templateUrl: 'html/ad/list.html'
	});

	$routeProvider.when('/ad/:ad', {
		controller: 'adCtrl', 
		templateUrl: 'html/ad/show.html' 
	});
});
