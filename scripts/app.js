var app = angular.module('MyModule', ['ngRoute', 'angularCSS', 'ngMaterial']);

var routeProvider = function ($routeProvider) {
    $routeProvider.when("/main", {
        templateUrl: "components/main/main.html",
        controller: "MainController",
        css: 'components/main/main.css',


    }).otherwise({
        redirectTo: '/main'
    })
}

app.config(routeProvider)