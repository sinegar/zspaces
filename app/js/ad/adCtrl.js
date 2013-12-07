'user strict';

angular.module('zspaces.controllers')

.controller('adCreateCtrl', function ($scope, adSvc) {
	$scope.ad = {}; 
	
	$scope.create = function() {
		adSvc.create($scope.ad); 
	};
	
})

.controller('adListCtrl', function ($scope, adSvc, angularFireCollection) {
	$scope.ads = angularFireCollection(adSvc.firebase().limit(10)); 
})

;