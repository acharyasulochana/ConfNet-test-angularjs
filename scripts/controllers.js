var app = angular.module('MyModule');


var MainController = function ($scope, $mdDialog, apiService) {
	$scope.users = apiService.getUsers()
		.then(response => {
			$scope.users = response

		})

	$scope.editUser = function ($response) {
		apiService.getUsers()
			.then(response => {
				alert(response)
			})
	}

	$scope.editUser = function (ev, $user) {
		$mdDialog.show({
			controller: function ($scope) {
				$scope.heading = "Add new user";
				$scope.first_name = $user.first_name;
				$scope.last_name = $user.last_name;
				$scope.is_active = $user.is_active;
				$scope.save = function () {
					$mdDialog.hide();
					if ($scope.first_name.length && $scope.last_name && $scope.is_active) {
						$scope.data = {
							first_name: $scope.first_name,
							last_name: $scope.last_name,
							is_active: $scope.is_active
						}
						apiService.editUser($scope.data, $user.id)
							.then(response => {
								location.reload(true);
							});
					}
				}

			},
			templateUrl: 'components/dialogbox/dialog.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose: true,
			fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
		})

	}


	$scope.addUser = function (ev) {
		$mdDialog.show({
			controller: function ($scope) {
				$scope.heading = "Add new user";
				$scope.first_name = "";
				$scope.last_name = "";
				$scope.is_active = "";
				$scope.save = function () {
					$mdDialog.hide();
					if ($scope.first_name.length && $scope.last_name && $scope.is_active) {
						$scope.data = {
							first_name: $scope.first_name,
							last_name: $scope.last_name,
							is_active: $scope.is_active
						}

						apiService.addUser($scope.data)
							.then(response => {
								location.reload(true);
							});
					}
				}

			},
			templateUrl: 'components/dialogbox/dialog.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose: true,
			fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
		})
	}

	$scope.deleteUser = function ($id) {
		apiService.deleteUser($id)
			.then(response => {
				location.reload(true);
			});
	}





	// $scope.getUsers = function () {
	// 	apiService.getUsers()
	// 		.then(response => {
	// 			$scope.users = response

	// 		})
	// }

}



function DialogController($scope, $mdDialog) {
	$scope.hide = function () {
		$mdDialog.hide();
	};

	$scope.cancel = function () {
		$mdDialog.cancel();
	};

	$scope.answer = function (answer) {
		$mdDialog.hide(answer);
	};
}

app.controller('DialogController', DialogController)

app.controller('MainController', MainController);