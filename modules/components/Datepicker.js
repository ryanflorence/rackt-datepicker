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
    var now = new Date();
    return {
      selectedMonth: now.getMonth() + 1,
      selectedYear: now.getFullYear(),
      selectedDay: now.getDate()
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

  handleMonthChange (newMonth) {
    this.setState({ selectedMonth: newMonth});
  },

  handleDayChange (newDay) {
    this.setState({ selectedDay: newDay});
  },

  handleYearChange (newYear) {
    this.setState({ selectedYear: newYear});
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
    return (
      <div>
        {children}
        <pre>{selectedMonth} {selectedDay} {selectedYear}</pre>
      </div>
    );
  }
});



