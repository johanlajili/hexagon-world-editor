var hexagonWorldEditor = angular.module('hexagonWorldEditor', [
  'ngRoute'
]);
hexagonWorldEditor.controller('MenuController', function($scope, $route, $routeParams, $location) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
});
	
