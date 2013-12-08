'user strict';

angular.module('zspaces.services')

.factory('adSvc', function ($q, Firebase, FBURL) {
	
	var root = new Firebase(FBURL),
		ads = root.child('ads'), 
		geoAds = new geoFire(ads), 
		takens = root.child('taken'); 
	
	function create(ad) {
		var deferred = $q.defer();
			id = ads.push(ad, function() {
				geoAds.updateLocForId([ad.location.lng, ad.location.lng], id);
				deferred.resolve(id);
			}).name();
		
		return deferred.promise;
		 
	}

	function getAds(child) {
		return child ? ads.child(child) : ads; 
	}

	function getTakens(child) {
		return child ? takens.child(child) : takens; 
	}

	function take(id) {
		var deferred = $q.defer();

		ads.child(id).once('value', function(snapshot) {
			takens.child(id).set(snapshot.val(), function(error) {
				if (!error) {
					ads.child(id).remove(function(){
						deferred.resolve();
					});
				}
			}); 
		}); 

		return deferred.promise; 
	}
	
	return {
		create : create,
		take : take,
		ads: getAds,
		takens: getTakens
	};
	
})

;