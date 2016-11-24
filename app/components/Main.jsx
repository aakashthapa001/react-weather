var React = require('react'),
    Nav = require('Nav');

// Create Main Component for compete rendering of the app
var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
      </div>
    );
  }
});

// exports the Main component
module.exports = Main;
