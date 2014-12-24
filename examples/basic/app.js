var React = require('react');
var { Datepicker, Month, Day, Year, Hours, Minutes, Seconds } = require('react-datepicker');
var {
  slug,
  today,
  tenYearsFromToday,
  tenYearsAgo,
  randomDate,
  randomInt
} = require('./helpers');

////////////////////////////////////////////////////////////////////////////////
// Highly composable, make your own components that interact with the Datepicker
////////////////////////////////////////////////////////////////////////////////
var Today = React.createClass({
  statics: {
    // this is how <Datepicker/> knows to pay attention to the element
    datePickerChild: true
  },

  handleClick () {
    // Datepicker will pass in an `onChange` to you, call it when your
    // component wants to change the value
    this.props.onChange(new Date());
  },

  render () {
    return <button onClick={this.handleClick}>Today</button>;
  }
});

var SubtractYear = React.createClass({
  statics: {
    datePickerChild: true
  },

  handleClick () {
    // you also get `this.props.value` for the current value
    var year = this.props.value.getFullYear();
    if (year < this.props.lowestPossible)
      return alert("okay, please stop");
    // and you can change just a fragment of the date with key:value
    this.props.onChange({ year: year - 1});
  },

  render () {
    return <button onClick={this.handleClick}>Subtract Year</button>;
  }
});



////////////////////////////////////////////////////////////////////////////////
// The Demo app, note that any children can live inside <Datepicker/>
////////////////////////////////////////////////////////////////////////////////
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
        <p><button onClick={this.changeStuff}>Change Stuff</button></p>
        <pre>{this.state.date.toString()}</pre>
        <hr/>

        <p><label htmlFor="year">Pick a date in the future!</label></p>

        <Datepicker value={this.state.date} onChange={this.handleDateChange}>
          <p>
            <Year id="year" range={[tenYearsAgo, tenYearsFromToday]} aria-label="Year"/>
            <Month aria-label="Month"/>
            <Day aria-label="Day"/>
            <Hours aria-label="Hours"/>:
            <Minutes aria-label="Minutes"/>:
            <Seconds aria-label="Seconds"/>
          </p>
          <p>
            <Today/>
            <SubtractYear lowestPossible={tenYearsAgo.getFullYear()}/>
          </p>
        </Datepicker>

        <hr/>
        <p>{this.state.invalidDate ? 'Please choose a date in the future' : ''}</p>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('example'));
