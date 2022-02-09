angular.module("ninjaService", []).factory("ninjaService", [
  "$http",
  function ($http) {
    var ninjaService = {};

    ninjaService.ninjas = [];
    ninjaService.idList = [];

    ninjaService.fetchNinjas = function () {
      var url = "data/ninjas.json";
      return $http.get(url).then(function (response) {
        ninjaService.ninjas = response.data;
      });
    };

    ninjaService.removeNinja = function (ninja) {
      ninjaService.ninjas.splice(ninjaService.ninjas.indexOf(ninja), 1);
      return ninjaService.ninjas;
    };

    ninjaService.addNinja = function (newNinja) {
      ninjaService.ninjas.push({
        name: newNinja.name,
        belt: newNinja.belt,
        rate: parseInt(newNinja.rate),
        available: true,
      });

      return ninjaService.ninjas;
    };

    ninjaService.clearNewNinja = function () {
      return {
        name: "",
        belt: "",
        rate: "",
      };
    };

    ninjaService.removeAll = function () {
      ninjaService.ninjas = [];
      return ninjaService.ninjas;
    };

    // trasforma la stringa di numeri nel localStorage in un array di numeri
    ninjaService.getFavorites = function () {
      if (window.localStorage.getItem("idList") != null) {
        ninjaService.idList = window.localStorage
          .getItem("idList")
          .split(",")
          .map(Number);
      }
    };

    ninjaService.addFavorites = function (id) {
      ninjaService.idList.push(id);
      window.localStorage.setItem("idList", ninjaService.idList);
    };

    ninjaService.removeFavorites = function (id) {
      ninjaService.idList.splice(ninjaService.idList.indexOf(id), 1);
      window.localStorage.setItem("idList", ninjaService.idList);
      // se idList nel localStorage è vuota elimina la chiave
      if (window.localStorage.getItem("idList") == "") {
        window.localStorage.removeItem("idList");
      }
    };

    ninjaService.fetchNinjas();

    return ninjaService;
  },
]);

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
