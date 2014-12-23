var React = require('react');
var { Datepicker, Month, Day, Year } = require('react-datepicker');

var slug = () => {
  return Math.random().toString(16).slice(2, 10);
};

var randomDate = () => {
  return new Date(
    randomInt(2004, 2023),
    randomInt(1, 12),
    randomInt(1, 28)
  );
};

var randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var App = React.createClass({
  getInitialState () {
    return {
      foo: 'FOO',
      date: randomDate()
    };
  },

  changeStuff () {
    var date = this.state.date;
    this.setState({ foo: slug(), date: randomDate() });
  },

  handleDateChange (date) {
    this.setState({ date: date });
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

        <input
          value={this.state.foo}
          readOnly={true}
        />

        <Datepicker
          value={this.state.date}
          onChange={this.handleDateChange}
        >
          <Year aria-label="Year"/>
          <Month aria-label="Month"/>
          <Day aria-label="Day"/>
        </Datepicker>

        <pre>
          {this.state.date.toString()}
          {'\n'}
          {this.state.foo}
        </pre>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('example'));
