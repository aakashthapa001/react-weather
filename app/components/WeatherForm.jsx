var React = require('react');

// Create WeatherForm Component for weather form
var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    // pull value from the location ref/input
    var location = this.refs.location.value;

    if(location.length > 0) {
      // Clear input if input is valid
      this.refs.location.value = '';
      // then call the onSearch function by passing the location as a parameter user searched for
      this.props.onSearch(location);
    }
  },
  render: function() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Enter City Name" ref="location"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

// Export WeatherForm component
module.exports = WeatherForm;
