(function() {
    var hexagonWorldEditor = angular.module('hexagonWorldEditor');
    hexagonWorldEditor.directive('uploader', [

        function() {

            return {
                restrict: 'E',
                scope: {
                    action: '@'
                },
                controller: ['$scope',
                    function($scope) {
                        $scope.sendFile = function() {
                        };

                    }
                ],
                link: function(scope, elem) {
                    elem.find('.fake-uploader').click(function() {
                        elem.find('input[type="file"]').click();
                    });
                },
                replace: false,
                templateUrl: 'views/common/uploader.html'
            };

        }
    ]);

})();