var React = require('react');
var { Datepicker, Month, Day, Year } = require('react-datepicker');

var App = React.createClass({
  render () {
    return (
      <div>
        <Datepicker>
          <Month/>
          <Day/>
          <Year/>
        </Datepicker>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('example'));
