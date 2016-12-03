var React = require('react'),
    Nav = require('Nav');

// Create Main Component for compete rendering of the app

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

// exports the Main component
module.exports = Main;
