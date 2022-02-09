/* Controller principale dell'applicazione 
   Lo scope serve per il two way binding quindi HTML view = variabile JS 
*/
angular
  .module("NinjaController", ["ninjaService", "reverseFilter"])
  .controller("NinjaController", [
    "$scope",
    "ninjaService",
    "reverseFilter",
    function ($scope, ninjaService, reverseFilter) {
      var self = this;
      self.message = "Type to filter search: ";
      self.ninjas = ninjaService.ninjas;
      self.heartColor = { color: "default" };

      $scope.$watch(watchSource, function (current, previous) {
        self.ninjas = current;
      });

      function watchSource() {
        return ninjaService.ninjas;
      }

      self.reversedMessage = reverseFilter("Check out our random ninja!");

      self.removeNinja = function (ninja) {
        ninjaService.removeNinja(ninja);
      };

      self.addNinja = function () {
        ninjaService.addNinja(self.newNinja);
        self.newNinja = ninjaService.clearNewNinja();
      };

      self.removeAll = function () {
        ninjaService.removeAll();
      };

      // prende la lista dei preferiti dentro il localstorage
      self.getFavorites = function (id) {
        ninjaService.getFavorites();
        // se l'id è dentro la lista allora il colore del cuore sarà rosso
        if (ninjaService.idList.includes(id)) {
          self.heartColor = { color: "red" };
        }
      };

      // funzione per gestire il bottone dei preferiti
      self.handleFavorites = function (id) {
        // se è di colore grigio allora col click diventa rosso e lo aggiunge alla lista dei preferiti
        if (self.heartColor.color == "default") {
          self.heartColor = { color: "red" };
          ninjaService.addFavorites(id);
        }
        // se invece è di colore rosso allora col click diventa grigio e lo toglie dalla lista dei preferiti
        else {
          self.heartColor = { color: "default" };
          ninjaService.removeFavorites(id);
        }
      };
    },
  ]);
