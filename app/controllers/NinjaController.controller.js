
/* Controller principale dell'applicazione 
   Lo scope serve per il two way binding quindi HTML view = variabile JS 
*/
angular.module('NinjaController', ['ninjaService'])
.controller('NinjaController', ['$scope', 'ninjaService', function($scope, ninjaService){
    $scope.message = "Type to filter search: ";
    
  
    ninjaService.getNinjas().then(function(data){
        $scope.ninjas = data;
    });
    

    $scope.removeNinja = function(ninja){
        ninjaService.removeNinja($scope.ninjas, ninja);
    };

    $scope.addNinja = function(){
        ninjaService.addNinja($scope.ninjas, $scope.newNinja);
        $scope.newNinja = ninjaService.clearNewNinja();
    };

    $scope.removeAll = function(){
        $scope.ninjas = ninjaService.removeAll();
    };

}]);