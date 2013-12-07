'use strict';


// Declare app level module which depends on filters, and services
angular.module('zspaces', [
	'ngRoute', 'firebase', 
	'zspaces.config', 'zspaces.controllers', 'zspaces.services',
	'zspaces.directives', 'zspaces.filters' 
])

.config(function ($routeProvider) {
	$routeProvider.otherwise({
		redirectTo: '/'
	});
})

// establish authentication

.run(function ($rootScope, Firebase, FBURL, angularFireAuth) {
	angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: "auth", path: '/login'});
	
})

;

angular.module('zspaces.controllers', []);

angular.module('zspaces.services', []);

angular.module('zspaces.directives', []);

angular.module('zspaces.filters', []);