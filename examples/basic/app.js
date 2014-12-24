var React = require('react');
var { Datepicker, Month, Day, Year, Hours, Minutes, Seconds } = require('react-datepicker');

var slug = () => {
  return Math.random().toString(16).slice(2, 10);
};

var today = new Date();
var tenYearsFromToday = new Date(today.getFullYear() + 10, 0, 1);

var randomDate = () => {
  // make sure our random dates are always valid (1 year ahead)
  var thisYear = today.getFullYear();
  return new Date(
    randomInt(thisYear + 1, tenYearsFromToday.getFullYear()),
    randomInt(0, 11),
    randomInt(1, 28),
    randomInt(0, 23)
  );
};

var randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var App = React.createClass({
  getInitialState () {
    return {
      invalidDate: false,
      date: randomDate()
    };
  },

  changeStuff () {
    var date = this.state.date;
    this.setState({
      invalidDate: false,
      date: randomDate()
    });
  },

  handleDateChange (date) {
    var invalidDate = date < today;
    this.setState({ date: date, invalidDate });
  },

  handleFooChange (event) {
    this.setState({ foo: event.target.value });
  },

  render () {
    return (
      <div>
        <p>
          <button onClick={this.changeStuff}>Change Stuff</button>
        </p>

        <Datepicker
          value={this.state.date}
          onChange={this.handleDateChange}
        >
          <Year range={[today, tenYearsFromToday]} aria-label="Year"/>
          <Month aria-label="Month"/>
          <Day aria-label="Day"/>
          <Hours aria-label="Hours"/>
          <Minutes aria-label="Minutes"/>
          <Seconds aria-label="Seconds"/>
        </Datepicker>

        <pre>
          {this.state.date.toString()}
        </pre>
        <p>
          {this.state.invalidDate ? 'Please choose a date in the future' : ''}
        </p>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('example'));
