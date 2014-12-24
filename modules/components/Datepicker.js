// validate years
// disabled dates
var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var enUS = require('../locale/enUS.js');
var moment = require('moment');
var warning = require('react/lib/warning');
var normalizeDay = require('../utils/normalizeDay');

var { bool, func, array, shape, string, instanceOf, arrayOf } = React.PropTypes;
var date = instanceOf(Date);

var DatePicker = module.exports = React.createClass({

  displayName: 'DatePicker',

  propTypes: {
    defaultValue: date,
    readOnly: bool,
    onChange: func,
    onValidationError: func,
    locale: shape({
      months: arrayOf(string),
      days: arrayOf(string)
    }).isRequired,
    value: (props, propName, componentName) => {
      warning(!(props.value && !props.onChange) || props.readOnly,
        "You provided a `value` prop to a a `Datepicker` without an `onChange` handler. "+
        "This will render a read-only field. If the field should be mutable use `defaultValue`. "+
        "Otherwise, set either `onChange` or `readOnly`. Check the render method of "+ componentName
      )
    }
  },

  getDefaultProps () {
    var today = new Date();
    return {
      locale: enUS,
      readOnly: false
    };
  },

  getInitialState () {
    var value = this.props.defaultValue || this.props.value || new Date();
    return { value };
  },

  componentWillReceiveProps (newProps) {
    if (newProps.value)
      this.setState({ value: newProps.value });
  },

  handleChange (fragmentName, fragmentValue) {
    if (this.props.value && !this.props.onChange)
      return;
    var handler = this.changeHandlers[fragmentName];
    var newValue = handler.call(this, fragmentValue);
    this.setState({ value: newValue }, () => {
      this.props.onChange(this.state.value);
    });
  },

  getDateValues () {
    var { value } = this.state;
    return {
      year: value.getFullYear(),
      month: value.getMonth(),
      day: value.getDate(),
      hours: value.getHours(),
      minutes: value.getMinutes(),
      seconds: value.getSeconds()
    };
  },

  changeHandlers: {
    year (newYear) {
      var { year, month, day, hours, minutes, seconds } = this.getDateValues();
      return new Date(newYear, month, day, hours, minutes, seconds);
    },

    month (newMonth) {
      var { year, month, day, hours, minutes, seconds } = this.getDateValues();
      var normalizedDay = normalizeDay(year, newMonth, day);
      return new Date(year, newMonth, normalizedDay, hours, minutes, seconds);
    },

    day (newDay) {
      var { year, month, day, hours, minutes, seconds } = this.getDateValues();
      return new Date(year, month, newDay, hours, minutes, seconds);
    },

    hour (newHours) {
      var { year, month, day, hours, minutes, seconds } = this.getDateValues();
      return new Date(year, month, day, newHours, minutes, seconds);
    },

    minutes (newMinutes) {
      var { year, month, day, hours, minutes, seconds } = this.getDateValues();
      return new Date(year, month, day, hours, newMinutes, seconds);
    },

    seconds (newSeconds) {
      var { year, month, day, hours, minutes, seconds } = this.getDateValues();
      return new Date(year, month, day, hours, minutes, newSeconds);
    }
  },

  render () {
    var children = React.Children.map(this.props.children, (child) => {
      return cloneWithProps(child, {
        locale: this.props.locale,
        value: this.state.value,
        onChange: this.handleChange.bind(this, child.props.fragment)
      });
    });
    return <div>{children}</div>;
  }

});

