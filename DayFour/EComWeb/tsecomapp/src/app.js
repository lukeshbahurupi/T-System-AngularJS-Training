(function() {
  var app = angular.module("transflower", ["ngRoute"]);
  app.config(function($routeProvider) {
              $routeProvider
                .when("/main", {
                  templateUrl: "views/main.html",
                  controller: "MainController"
                })
                .when("/login", {
                  templateUrl: "views/login.html",
                  controller: "MainController"
                })
                .when("/auth", {
                  templateUrl: "views/auth.html",
                  controller: "loginController"
                })
                .when("/product", {
                  templateUrl: "views/product.html",
                  controller: "productController"
                })
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
                  redirectTo: "/main"
                });
  });
}());