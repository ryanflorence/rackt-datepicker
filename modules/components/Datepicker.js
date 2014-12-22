var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var enUS = require('../locale/enUS.js');
var moment = require('moment');
var Month = require('./Month');
var Day = require('./Day');
var Year = require('./Year');

var DelegatedProps = {
  getDelegatedProps () {
    var delegated = {};
    this.delegate.props.forEach((name) => {
      delegated[name] = this.props[name];
    });
    this.delegate.state.forEach((name) => {
      delegated[name] = this.state[name];
    });
    return delegated;
  }
};

var DatePicker = module.exports = React.createClass({

  mixins: [ DelegatedProps ],

  propTypes: {
    locale: React.PropTypes.shape({
      months: React.PropTypes.array,
      days: React.PropTypes.array
    })
  },

  getDefaultProps () {
    return {
      locale: enUS
    };
  },

  getInitialState () {
    var value = this.props.defaultValue || new Date();
    return {
      value,
      selectedMonth: value.getMonth() + 1,
      selectedYear: value.getFullYear(),
      selectedDay: value.getDate()
    };
  },

  delegate: {
    props: [
      'locale'
    ],

    state: [
      'selectedDay',
      'selectedMonth',
      'selectedYear'
    ]
  },

  handleChange () {
    this.props.onChange(this.state.value);
  },

  handleMonthChange (newMonth) {
    var { selectedYear, selectedDay } = this.state;
    var value = new Date(selectedYear, newMonth, selectedDay);
    this.setState({ value, selectedMonth: newMonth }, this.handleChange);
  },

  handleDayChange (newDay) {
    var { selectedYear, selectedMonth } = this.state;
    var value = new Date(selectedYear, selectedMonth, newDay);
    this.setState({ value, selectedDay: newDay}, this.handleChange);
  },

  handleYearChange (newYear) {
    var { selectedMonth, selectedDay } = this.state;
    var value = new Date(newYear, selectedMonth, selectedDay);
    this.setState({ value, selectedYear: newYear}, this.handleChange);
  },

  render () {
    var { selectedMonth, selectedYear, selectedDay } = this.state;
    var children = React.Children.map(this.props.children, (child) => {
      var props = this.getDelegatedProps();
      if (child.type === Month.type)
        props.onChange = this.handleMonthChange;
      if (child.type === Day.type)
        props.onChange = this.handleDayChange;
      if (child.type === Year.type)
        props.onChange = this.handleYearChange;
      return cloneWithProps(child, props);
    });
    return <div>{children}</div>;
  }
});



