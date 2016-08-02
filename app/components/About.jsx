var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About ReactWeather</h1>
      <p>This is a simple weather application built by Kevin Brown with React.</p>
      <p>Here are some of the tools I've used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This is the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used the Open Weather Map API to search for weather data by city name.
        </li>
        <li>
          <a href="http://foundation.zurb.com">Foundation</a> - This is the front-end framework used.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
