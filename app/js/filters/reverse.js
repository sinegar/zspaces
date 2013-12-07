// https://github.com/firebase/angularFire-seed/blob/master/app/js/filters.js

angular.module('zspaces.filters')

.filter('reverse', function() {
	return function(items) {
		return items.slice().reverse();
	};
})

;