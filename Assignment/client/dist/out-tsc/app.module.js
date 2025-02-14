angular.module("myApp", ["ngRoute", "catlogModule", "authModule"])
    .config(function ($routeProvider) {
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
