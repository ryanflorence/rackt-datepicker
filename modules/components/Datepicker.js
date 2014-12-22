var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var enUS = require('../locale/enUS.js');
var moment = require('moment');
var Month = require('./Month');
var Day = require('./Day');
var Year = require('./Year');
var warning = require('react/lib/warning');

// use `defaultValue`, no onChange immutable, console warn
// use `value`, need to update
// validate years
// disabled dates

var DatePicker = module.exports = React.createClass({

  propTypes: {
    defaultValue: React.PropTypes.instanceOf(Date),
    readOnly: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    locale: React.PropTypes.shape({
      months: React.PropTypes.array,
      days: React.PropTypes.array
    }),
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
      locale: enUS
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

  handleChange (newDate) {
    if (this.props.value && !this.props.onChange)
      return;
    this.setState({ value: newDate }, () => {
      this.props.onChange(this.state.value);
    });
  },

  render () {
    var children = React.Children.map(this.props.children, (child) => {
      return cloneWithProps(child, {
        locale: this.props.locale,
        value: this.state.value,
        onChange: this.handleChange
      });
    });
    return <div>{children}</div>;
  }
});



