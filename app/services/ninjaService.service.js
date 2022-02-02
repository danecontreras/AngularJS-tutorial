angular.module('ninjaService', [])
.service('ninjaService', ['$http', function($http){
    
    this.getNinjas = function(){
        var url = 'data/ninjas.json';

        return $http.get(url)
            .then(function(response){
                return response.data;
        });
    };

    this.removeNinja = function(ninjas, ninja){
        return ninjas.splice(ninjas.indexOf(ninja), 1);
    };

    this.addNinja = function(ninjas, newNinja){
        return ninjas.push({
            name: newNinja.name,
            belt: newNinja.belt,
            rate: parseInt(newNinja.rate),
            available: true
        });
    };

    this.clearNewNinja = function(){
        return {
            name: "",
            belt:  "",
            rate: ""
        };
    };

    this.removeAll = function(){
        return [];
    };

}]);

/* 
    Service e Factory:
    - Sono entrambi di tipo Singleton.
    - Factory ritorna un oggetto, mentre Service è un costruttore delle funzioni
      con l'oggetto già prestabilito. 
    - con Factory bisogna specificare l'oggetto da usare e ritornare. 
      con Service invece si usa semplicemente la parola chiave 'this' senza ritornare nulla.

    SINTASSI FACTORY: 

    appModule.factory('nomeFactory', ['$var', function($var){

        var _nomeFactory = {};
        
        _ninjaFactory.esempioFunzione = function(){
            return ...
        };

        return _nomeFactory;
    }]);
    
    SINTASSI SERVICE:

    appModule.service('nomeService', ['$var', function($var){

        this.esempioFunzione = function(){
            return ...
        };

    }]);

*/
