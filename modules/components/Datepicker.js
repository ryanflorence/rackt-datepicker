var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var enUS = require('../locales/enUS.js');
var moment = require('moment');
var Month = require('./Month');

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

  handleMonthChange (value) {
    this.setState({
      selectedMonth: value
    });
  },

  render () {
    var children = React.Children.map(this.props.children, (child) => {
      var props = this.getDelegatedProps();
      if (child.type === Month.type)
        props.onChange = this.handleMonthChange;
      return cloneWithProps(child, props);
    });

    return (
      <div>
        {children}
      </div>
    );
  }
});



