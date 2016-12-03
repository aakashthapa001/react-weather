var React = require('react'),
    {Link} = require('react-router');

// Create Examples component

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Kathmandu'>Kathmandu, KTM</Link>
        </li>
        <li>
          <Link to='/?location=Sydney'>Sydney, AUS</Link>
        </li>
      </ol>
    </div>
  );
}

// Export Examples component
module.exports = Examples;
