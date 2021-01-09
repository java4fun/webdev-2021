angular.module("example", []).controller("ExampleController", function ($http) {
  var self = this;
  self.artists = [];

  $http
    .get("/artists")
    .success(function (data) {
      data.forEach(function (e) {
        self.artists.push(e);
      });
    })
    .error(function () {
      console.error("ajax call failed");
    });
});
