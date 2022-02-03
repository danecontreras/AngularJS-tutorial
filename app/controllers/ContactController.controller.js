// Controller per la view contact.html
angular.module("ContactController", []).controller("ContactController", [
  "$scope",
  "$location",
  function ($scope, $location) {
    $scope.sendMessage = function () {
      $location.path("/contact-success");
    };
  },
]);
