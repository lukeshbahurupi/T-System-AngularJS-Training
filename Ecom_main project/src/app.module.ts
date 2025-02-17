import * as angular from "angular";

angular.module("myApp",["ngRoute","catlogModule","authModule","cartModule"])
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
      .when("/cart", {
        templateUrl: "src/views/cart.html",
        controller: "cartController"
      })
      .otherwise({
        redirectTo: "/catlog"
      });
});