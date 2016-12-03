var React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage'),
    openWeatherMap = require('openWeatherMap');

// Create Weather component for Weather form
var Weather = React.createClass({
  // set Initial State
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  // create handle or function for search in which location is passed from the user input
  handleSearch: function(location) {
    var self = this;

    // When someone start the search
    self.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp) {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage) {
      self.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return(
      <div>
        <h1 className="text-center">Weather Component</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

// Export Weather component
module.exports = Weather;
