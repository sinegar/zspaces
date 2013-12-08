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

.controller('takenCtrl', function ($scope, $routeParams, $location, adSvc, angularFire) {

	var id = $routeParams.ad;
	
	angularFire(adSvc.takens().child(id), $scope, 'ad', {});
	
	$scope.busy = true;

	$scope.takeIt = function() {
		$scope.busy = true;
		adSvc.take(id).then(function() {
			$location.path('/');
			$scope.busy = false;
		}); 
	}
})

.controller('adCreateCtrl', function ($scope, $location, adSvc) {

	var photos = [
			{url:'http://farm1.staticflickr.com/4/9637807_55e0703d65_o.jpg', attr:'Photo by A is for Angie (http://www.flickr.com/photos/aisforangie/)'},
			{url:'http://farm3.staticflickr.com/2637/3798039879_7972b22fda_o.jpg', attr:'Photo by jaleal (http://www.flickr.com/photos/21351047@N00/)'},
			{url:'http://farm3.staticflickr.com/2697/4105817714_928bb2580a_b.jpg', attr:'Photo by Scorpions and Centaurs (http://www.flickr.com/photos/sshb/)'},
			{url:'http://farm5.staticflickr.com/4025/4243617717_f309379c32_o.jpg', attr:'Photo by Mona Loldwoman (Look for the good) (http://www.flickr.com/photos/40147761@N04/)'},
			{url:'http://farm1.staticflickr.com/4/9637807_55e0703d65_o.jpg', attr:'Photo by A is for Angie (http://www.flickr.com/photos/aisforangie/)'},
			{url:'http://farm1.staticflickr.com/4/9637807_55e0703d65_o.jpg', attr:'Photo by A is for Angie (http://www.flickr.com/photos/aisforangie/)'},
			{url:'http://farm1.staticflickr.com/4/9637807_55e0703d65_o.jpg', attr:'Photo by A is for Angie (http://www.flickr.com/photos/aisforangie/)'},
			{url:'http://farm1.staticflickr.com/4/9637807_55e0703d65_o.jpg', attr:'Photo by A is for Angie (http://www.flickr.com/photos/aisforangie/)'},
			{url:'http://farm1.staticflickr.com/4/9637807_55e0703d65_o.jpg', attr:'Photo by A is for Angie (http://www.flickr.com/photos/aisforangie/)'},
		];
	
	$scope.ad = {}; 
	
	$scope.busy = false;
	$scope.create = function() {
		$scope.busy = true;
		
		$scope.ad.address_component = {};
		
		var random = Math.floor(Math.random() * (photos.length - 1));
		$scope.ad.photo = photos[random].url;
		$scope.ad.photo_attr = photos[random].attr;
		
		var place = $scope.gPlace.getPlace();
		
		angular.forEach(place.address_components, function(component) {
			$scope.ad.address_component[component.types[0]] = component.long_name;
		}); 

		$scope.ad.location = {
			lat: place.geometry.location.lat(),
			lng: place.geometry.location.lng()
		};
		
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