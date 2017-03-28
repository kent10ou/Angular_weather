/* === Routes === */
weatherApp.config(function ($routeProvider, $locationProvider, $sceDelegateProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })

    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })

    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })

    $locationProvider.hashPrefix('');

    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://api.openweathermap.org/**'
    ]);
});
