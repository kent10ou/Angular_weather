/* === Services === */
weatherApp.service('cityService', function() {

    this.city = "New York, NY";

});

weatherApp.service('weatherService', ['$resource', function ($resource) {

    this.GetWeather = function (city, days) {

        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=a8d51b4d0f8e4b6d3b51fd0e98284c02",{ get: { method: "JSONP" } });

        return weatherAPI.get({ q: city, cnt: days });
    }
}])
