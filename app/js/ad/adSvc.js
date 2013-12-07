'user strict';

angular.module('zspaces.services')

.factory('adSvc', function (Firebase, FBURL) {
	
	var fb = new Firebase(FBURL).child('ads'); 
	
	function create(ad) {
		fb.push(ad); 
	}

	function firebase(child) {
		return child ? fb.child(child) : fb; 
	}
	
	return {
		create : create,
		firebase: firebase
	};
	
})

;