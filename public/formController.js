angular.module("formController", [])
.controller("FormController", ["$scope", function($scope){

var data = {};
var errors = false;
$scope.nameError = false;
$scope.emailError = false;
$scope.emailAddError = false;
$scope.websiteError = false;
$scope.websiteAddError = false;
$scope.messageError = false;
$scope.formSubmitted = false;

$scope.name = "Name";
$scope.email = "Email";
$scope.website = "Website";
$scope.message = "Message";

$scope.submitForm = function() {

	$scope.nameError = false;
	$scope.emailError = false;
	$scope.emailAddError = false;
	$scope.websiteError = false;
	$scope.websiteAddError = false;
	$scope.messageError = false;
	$scope.formSubmitted = false;

	if ($scope.name === undefined || $scope.name.trim() === "") {
		$scope.nameError = true;
	}
	if ($scope.email !== undefined || $scope.email.trim() !== "") {
		if ($scope.email.indexOf("@") === -1) {
			$scope.emailAddError = true;
		}
	}
	if ($scope.email === undefined || $scope.email.trim() === "") {
		$scope.emailError = true;
	}
	if ($scope.website !== undefined || $scope.website.trim() !== "") {
		if ($scope.website.indexOf("http://") === -1) {
			$scope.websiteAddError = true;
		}
	}
	if ($scope.website === undefined || $scope.website.trim() === "") {
		$scope.websiteError = true;
	}
	if ($scope.message === undefined || $scope.message.trim() === "") {
		$scope.messageError = true;
	}

	if ($scope.messageError === true || $scope.websiteError === true || 
		$scope.websiteAddError === true || $scope.emailError === true || 
		$scope.emailAddError === true || $scope.nameError === true) {
		return;
	}


	data.name = $scope.name;
	data.email = $scope.email;
	data.website = $scope.website;
	data.message = $scope.message;

	$scope.formSubmitted = true;
	console.log(data);
}


}])