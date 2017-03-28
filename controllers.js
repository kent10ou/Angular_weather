/* === Controllers === */
weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
      cityService.city = $scope.city
    })

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {

    $scope.city = cityService.city;
    console.log('scopecity2: ', $scope.city)
    $scope.days = $routeParams.days || 2;

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=a8d51b4d0f8e4b6d3b51fd0e98284c02", { get: { method: "JSONP" } });

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    console.log($scope.weatherResult);
    $scope.convertToFahrenheit = function (degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }

    $scope.convertToDate = function (dt) {
      return new Date(dt * 1000);
    }

}]);

// http://api.openweathermap.org/data/2.5/forecast/daily?APPID=a8d51b4d0f8e4b6d3b51fd0e98284c02
