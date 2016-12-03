// Requre axios
var axios = require('axios');

// 'const' is a variable which cannot be alterd
// my openWeatherMap API Key ==> 8e4741aed70448704d9c343f23a9d7ed
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8e4741aed70448704d9c343f23a9d7ed&units=imperial';

module.exports = {
  getTemp: function(location) {
    // Encode url properly for the browser
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // this takes the url and fetches and brings back the result
    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}
