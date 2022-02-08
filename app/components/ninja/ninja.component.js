angular.module("ninjaComponent", []).component("ninjaComponent", {
  bindings: {
    ninja: "=",
  },
  templateUrl: "app/components/ninja/ninja.template.html",
  controller: "NinjaController",
});
