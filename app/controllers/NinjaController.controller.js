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

      $scope.$watch(watchSource, function (current, previous) {
        self.ninjas = current;
        console.log({ previous, current });
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
    },
  ]);
