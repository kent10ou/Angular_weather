// Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Routes
weatherApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
  })
  .when('/forecast', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecasatController'
  })
})

// Controllers
weatherApp.controller('homeController', ['$scope', function ($scope) {

}]);

weatherApp.controller('forecasatController', ['$scope', function ($scope) {

}]);
