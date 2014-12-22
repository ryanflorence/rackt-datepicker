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
    return { value };
  },

  delegate: {
    props: [
      'locale'
    ],

    state: [
      'value'
    ]
  },

  handleChange (newDate) {
    this.setState({ value: newDate }, () => {
      this.props.onChange(this.state.value);
    });
  },

  render () {
    var { selectedMonth, selectedYear, selectedDay } = this.state;
    var children = React.Children.map(this.props.children, (child) => {
      var props = this.getDelegatedProps();
      props.onChange = this.handleChange;
      return cloneWithProps(child, props);
    });
    return <div>{children}</div>;
  }
});



