(function() {
  var app = angular.module("myApp", ["ngRoute"]);
  app.config(function($routeProvider) {
              $routeProvider
                .when("/catlog", {
                  templateUrl: "views/catlog.html",
                  controller: "catlogController"
                })
                .when("/auth", {
                  templateUrl: "views/auth.html",
                  controller: "authController"
                })
                // .when("/product", {
                //   templateUrl: "views/product.html",
                //   controller: "prController"
                // })
                // .when("/cart", {
                //   templateUrl: "views/cart.html",
                //   controller: "ctController"
                // })
                // .when("/user/:username",{
                //   templateUrl:"views/user.html",
                //   controller: "UserController"
                // })
                // .when("/user/:username/:reponame",{
                //   templateUrl:"views/repo.html",
                //   controller:"RepoController"
                // })
                .otherwise({
                  redirectTo: "/catlog"
                });
  });
}());