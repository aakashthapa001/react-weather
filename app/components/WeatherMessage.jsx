var React = require('react');

// Create WeatherMessage/Result Component
var WeatherMessage = ({temp, location}) => {  
  return(
    <h2>It's {temp} in {location}</h2>
  );
}

// Export the WeatherMessage Component
module.exports = WeatherMessage;
