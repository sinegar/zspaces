'user strict';

angular.module('zspaces.controllers')

.controller('logoutCtrl', function ($scope, angularFireAuth) {
	$scope.logout = function() {
		angularFireAuth.logout();
	};
})

.controller('loginCtrl', function ($scope, angularFireAuth) {
		$scope.email = null;
		$scope.pass = null;
		$scope.confirm = null;
		$scope.createMode = false;
		
		$scope.loginFacebook = function() {
			angularFireAuth.login("facebook");
		};
		
		$scope.createAccount = function() {
			loginService.createAccount($scope.email, $scope.pass, function(err, user) {
				if( err ) {
					$scope.err = err;
				}
				else {
					// must be logged in before I can write to my profile
					$scope.login(function(err) {
						if( !err ) {
							loginService.createProfile(user.id, user.email);
						}
					});
				}
			});
		};
})

;