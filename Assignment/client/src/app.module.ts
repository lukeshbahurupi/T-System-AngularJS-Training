import * as angular from "angular";

angular.module("myApp",["catlogModule","authModule"])
.config(($routeProvider: any) => {
    $routeProvider
      .when("/catlog", {
        templateUrl: "src/views/catlog.html",
        controller: "catlogController"
      })
      .when("/auth", {
        templateUrl: "src/views/auth.html",
        controller: "authController"
      })
      .otherwise({
        redirectTo: "/catlog"
      });
});