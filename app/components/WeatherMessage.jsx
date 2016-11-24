var React = require('react');

// Create WeatherMessage/Result Component
var WeatherMessage = React.createClass({
  render: function() {

    var {temp, location} = this.props;

    return(
      <h2>It's {temp} in {location}</h2>
    );
  }
});

// Export the WeatherMessage Component
module.exports = WeatherMessage;
