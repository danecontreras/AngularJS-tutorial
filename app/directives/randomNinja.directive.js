// Dichiarazione della directive del tag random-ninja nell'homepage
angular.module('randomNinja', [])
.directive('randomNinja', [function(){

    return {
        restrict: 'E',
        scope: {
            ninjas: '=',
            title: '='
        },
        templateUrl: 'views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope){
            $scope.random = Math.floor(Math.random() * 4);
        }
    };

}]);