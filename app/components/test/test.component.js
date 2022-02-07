angular.module("testComponent", []).component("testComponent", {
  templateUrl: "app/components/test/test.template.html",
  controller: function () {
    this.message = "Message displayed succesfully!";
  },
});
