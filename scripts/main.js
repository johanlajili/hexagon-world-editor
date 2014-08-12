(function () {
	var hexagonWorldEditor = angular.module('hexagonWorldEditor', [
  	'ngRoute'
	]);
	hexagonWorldEditor.controller('MenuController', function ($scope, $route, $routeParams, $location) {

		$scope.routeIs = function (name) {
			return $location.path().substring(1, name.length + 1) == name;
		};
	});

	hexagonWorldEditor.controller('CharactersController', function ($scope, $route, $routeParams, $location) {

	});
	hexagonWorldEditor.controller('UnitsController', function ($scope, $route, $routeParams, $location) {

	});
	hexagonWorldEditor.controller('StagesController', function ($scope, $route, $routeParams, $location) {

	});
	hexagonWorldEditor.controller('LevelsController', function ($scope, $route, $routeParams, $location) {

	});
	hexagonWorldEditor.config(['$routeProvider',
	  function ($routeProvider) {
			$routeProvider.when('/arenas/arenas', {
				templateUrl: 'views/arenas/arenas.html',
				controller: 'ArenasController'
			});
			$routeProvider.when('/arenas/tiles', {
				templateUrl: 'views/arenas/arenas.html',
				controller: 'TilesController'
			});
			$routeProvider.when('/arenas', {
				redirectTo: '/arenas/arenas'
			});
			$routeProvider.when('/characters', {
				templateUrl: 'views/characters/characters.html',
				controller: 'CharactersController'
			});
			$routeProvider.when('/units', {
				templateUrl: 'views/units/units.html',
				controller: 'UnitsController'
			});
			$routeProvider.when('/stages', {
				templateUrl: 'views/stages/stages.html',
				controller: 'StagesController'
			});
			$routeProvider.when('/levels', {
				templateUrl: 'views/levels/levels.html',
				controller: 'LevelsController'
			});

			$routeProvider.otherwise({
				redirectTo: '/arenas'
			});
	  }]);

})();