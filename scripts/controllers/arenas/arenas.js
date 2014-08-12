(function () {
	var hexagonWorldEditor = angular.module('hexagonWorldEditor');
	hexagonWorldEditor.controller('ArenasController', function ($scope, $route, $routeParams, $location) {
		$scope.selectedTab = "arenas";
	});
})()