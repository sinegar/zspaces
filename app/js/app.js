'use strict';


// Declare app level module which depends on filters, and services
angular.module('zspaces', [
	'ngRoute', 'zspaces.controllers', 'zspaces.services' 
])

.config(function ($routeProvider) {
	$routeProvider.otherwise({
		redirectTo: '/'
	});
})

// establish authentication
/*
.run(['$rootScope', 'instance', 'Firebase', 'FBURL', 'fbAuthoriser', 
function ($rootScope, instance, Firebase, FBURL, fbAuthoriser) {
	$rootScope.instance = instance();

	// log the user in if credentials exists
	fbAuthoriser.initialise(new Firebase(FBURL), {});
}])
*/
;

angular.module('zspaces.controllers', []);

angular.module('zspaces.services', []);