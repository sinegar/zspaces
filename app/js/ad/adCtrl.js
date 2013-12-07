'user strict';

angular.module('zspaces.controllers')

.controller('adCtrl', function ($scope, $routeParams, $location, adSvc, angularFire) {

	var id = $routeParams.ad;
	
	angularFire(adSvc.ads().child(id), $scope, 'ad', {});
	
	$scope.busy = false;

	$scope.takeIt = function() {
		$scope.busy = true;
		adSvc.take(id).then(function() {
			$location.path('/');
			$scope.busy = false;
		}); 
	}
})

.controller('adCreateCtrl', function ($scope, $location, adSvc) {
	$scope.ad = {}; 
	
	$scope.busy = false;
	$scope.create = function() {
		$scope.busy = true;
		
		$scope.ad.address_component = {};
		
		angular.forEach($scope.gPlace.getPlace().address_components, function(component) {
			$scope.ad.address_component[component.types[0]] = component.long_name;
		}); 

		adSvc.create($scope.ad).then(function(id) {
			$scope.busy = false;
			$location.path('/ad/' + id);
		});
	};
	
})

.controller('adListCtrl', function ($scope, adSvc, angularFireCollection) {
	$scope.ads = angularFireCollection(adSvc.ads().limit(10)); 
	$scope.takens = angularFireCollection(adSvc.takens().limit(10)); 
})

;