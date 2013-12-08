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
			{url:'http://farm9.staticflickr.com/8258/8697566138_1fde4422b3_h.jpg',
			attr:'Photo by Simonov (http://www.flickr.com/photos/simonov/)'},
			{url:'http://farm1.staticflickr.com/22/93571207_74a9ca2af6_b.jpg',
			attr:'Photo by Elvert Barnes (http://www.flickr.com/photos/perspective/)'},
			{url:'http://farm6.staticflickr.com/5312/5904535323_eac9b4bb2c_b.jpg',
			attr:'Photo by Alan R. Light (http://www.flickr.com/photos/alan_light/)'},
			{url:'http://farm4.staticflickr.com/3426/3201520022_f4ee91d411_b.jpg',
			attr:'Photo by Dwonderwall (http://www.flickr.com/photos/dwonderwall/)'},
			{url:'http://farm3.staticflickr.com/2803/4507630614_830d55e698_b.jpg',
			attr:'Photo by Sami Niemela (http://www.flickr.com/photos/sami/)'},
			{url:'http://farm4.staticflickr.com/3036/2963264107_f2a44e4d91_b.jpg',
			attr:'Photo by achimh (http://www.flickr.com/photos/achimh/)'},
			{url:'http://farm7.staticflickr.com/6081/6078233948_194865581b_b.jpg',
			attr:'Photo by adactio (http://www.flickr.com/photos/adactio/)'},
			{url:'http://farm8.staticflickr.com/7175/6392781395_65beff86f7_b.jpg',
			attr:'Photo by ^Missi^ (http://www.flickr.com/photos/15481483@N06/)'},
			{url:'http://farm2.staticflickr.com/1054/4730354282_4bdd02316f_b.jpg',
			attr:'Photo by Ell Brown (http://www.flickr.com/photos/ell-r-brown/)'},
			{url:'http://farm6.staticflickr.com/5189/5634479682_bf1cc3d24e_b.jpg',
			attr:'Photo by informatique (http://www.flickr.com/photos/infomatique/)'},
			{url:'http://farm3.staticflickr.com/2432/3935556077_b6a7fb727d_b.jpg',
			attr:'Photo by Loozrboy (http://www.flickr.com/photos/loozrboy/)'},
			{url:'http://farm3.staticflickr.com/2568/4228566951_9371dd9506_b.jpg',
			attr:'Photo by Ell Brown (http://www.flickr.com/photos/ell-r-brown/)'}
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