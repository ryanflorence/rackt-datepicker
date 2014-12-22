var React = require('react');
var { Datepicker, Month, Day, Year } = require('react-datepicker');

var App = React.createClass({
  getInitialState () {
    return {
      date: new Date()
    };
  },

  handleDateChange (date) {
    this.setState({
      date: date
    });
  },

  render () {
    return (
      <div>
        <pre>{this.state.date.toString()}</pre>
        <Datepicker
          defaultValue={this.state.date}
          onChange={this.handleDateChange}
        >
          <Month/>
          <Day/>
          <Year/>
        </Datepicker>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('example'));
