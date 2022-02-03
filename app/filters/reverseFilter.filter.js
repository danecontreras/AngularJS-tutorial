//Custom Pipes (FILTER in AngularJS)
angular.module("reverseFilter", []).filter("reverse", function () {
  return function (input, uppercase) {
    input = input || "";
    var out = "";
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }

    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };
});
