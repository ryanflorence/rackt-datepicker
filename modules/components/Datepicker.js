// validate years
// disabled dates
var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var enUS = require('../locale/enUS.js');
var moment = require('moment');
var warning = require('react/lib/warning');

var { bool, func, array, shape, string, instanceOf, arrayOf } = React.PropTypes;
var date = instanceOf(date);

var DatePicker = module.exports = React.createClass({
  displayName: 'DatePicker',

  propTypes: {
    range: arrayOf(date),
    defaultValue: date,
    readOnly: bool,
    onChange: func,
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
      this.handleNewValue(newProps.value);
  },

  handleNewValue (newValue) {
    this.setState({ value: newValue });
  },

  handleChange (displayName, val) {
    if (this.props.value && !this.props.onChange)
      return;
    var handler = this.changeHandlers[displayName.toLowerCase()];
    var newDate = handler.call(this, val);
    this.setState({ value: newDate }, () => {
      this.props.onChange(this.state.value);
    });
  },

  getDateAsValues () {
    var { value } = this.props;
    return {
      year: value.getFullYear(),
      month: value.getMonth(),
      day: value.getDate()
    };
  },

  changeHandlers: {
    year (val) {
      var { month, day } = this.getDateAsValues();
      return new Date(val, month, day);
    },

    month (val) {
      var { year, day } = this.getDateAsValues();
      return new Date(year, val, day);
    },

    day (val) {
      var { year, month} = this.getDateAsValues();
      return new Date(year, month, val);
    }
  },

  render () {
    var children = React.Children.map(this.props.children, (child) => {
      return cloneWithProps(child, {
        locale: this.props.locale,
        value: this.state.value,
        onChange: this.handleChange.bind(this, child.type.displayName)
      });
    });
    return <div>{children}</div>;
  }
});

