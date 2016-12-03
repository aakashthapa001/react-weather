var React = require('react');

// Create WeatherMessage/Result Component
var WeatherMessage = ({temp, location}) => {
  return(
    <h3 className="text-center">It's {temp} in {location} .</h3>
  );
}

// Export the WeatherMessage Component
module.exports = WeatherMessage;
