var myNinjaApp = angular.module("myNinjaApp", [
  "ngRoute",
  "ngAnimate",
  "ninjaService",
  "NinjaController",
  "ContactController",
  "randomNinja",
  "testComponent",
  "ninjaComponent",
]);

// Viene eseguito prima che l'app si avvii
myNinjaApp.config([
  "$routeProvider",
  function ($routeProvider) {
    // Gestisce cosa viene visto nell'ng-view in index.html
    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html",
        controller: "NinjaController",
      })
      .when("/contact", {
        templateUrl: "views/contact.html",
        controller: "ContactController",
      })
      .when("/contact-success", {
        templateUrl: "views/contact-success.html",
        controller: "ContactController",
      })
      .when("/directory", {
        templateUrl: "views/directory.html",
        controller: "NinjaController",
        controllerAs: "ninjaCtrl",
      })
      .when("/test", {
        /* Quando si tratta di chiamare un component con l'ngRouting bisogna usare il tag del template e non l'URL del file,
           sennò il controller del component non verrà considerato! */
        template: "<test-component></test-component>",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

// Viene eseguito dopo che l'app si è avviato
myNinjaApp.run(function () {});
