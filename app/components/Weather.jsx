var React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage'),
    openWeatherMap = require('openWeatherMap');

// Create Weather component for Weather form
var Weather = React.createClass({
  // set Initial State
  getInitialState: function() {
    return {
      location: 'Kathmandu',
      temp: 88
    }
  },
  // create handle or function for search in which location is passed from the user input
  handleSearch: function(location) {
    var self = this;
    openWeatherMap.getTemp(location).then(function(temp) {
      self.setState({
        location: location,
        temp: temp
      });
    }, function(errorMessage) {
      alert(errorMessage);
    });
  },
  render: function() {

    var {temp, location} = this.state;

    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    );
  }
});

// Export Weather component
module.exports = Weather;
