angular.module("formController", [])
.controller("FormController", ["$scope", function($scope){

var data = {};

$scope.submitForm = function() {
	data.name = $scope.name
	data.email = $scope.email
	data.website = $scope.website
	data.message = $scope.message

	console.log(data);
}


}])