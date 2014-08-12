(function () {
	var hexagonWorldEditor = angular.module('hexagonWorldEditor');
	hexagonWorldEditor.controller('TilesController', function ($scope, $route, $routeParams, $location) {
		$scope.selectedTab = "tiles";
	});
})()