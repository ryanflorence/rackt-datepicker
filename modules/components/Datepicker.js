// validate years
// disabled dates
var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var moment = require('moment');
var warning = require('react/lib/warning');
var recursivelyMapChildren = require('../utils/recursivelyMapChildren');
var getDateValues = require('../utils/getDateValues');

var { bool, func, instanceOf } = React.PropTypes;
var date = instanceOf(Date);

var DatePicker = module.exports = React.createClass({

  displayName: 'DatePicker',

  propTypes: {
    defaultValue: date,
    readOnly: bool,
    onChange: func,
    onValidationError: func,
    value: (props, propName, componentName) => {
      warning(!(props.value && !props.onChange) || props.readOnly,
        "You provided a `value` prop to a a `Datepicker` without an `onChange` handler. "+
        "This will render a read-only field. If the field should be mutable use `defaultValue`. "+
        "Otherwise, set either `onChange` or `readOnly`. Check the render method of "+ componentName
      )
    }
  },

  getDefaultProps () {
    return { readOnly: false };
  },

  getInitialState () {
    var value = this.props.defaultValue || this.props.value || new Date();
    return { value };
  },

  componentWillReceiveProps (newProps) {
    if (newProps.value)
      this.setState({ value: newProps.value });
  },

  handleChange (changesOrNewDate) {
    if (this.props.value && !this.props.onChange)
      return;
    var newValue;
    if (changesOrNewDate instanceof Date)
      newValue = changesOrNewDate;
    else {
      var changes = changesOrNewDate;
      var values = Object.keys(changes).reduce((values, fragment) => {
        values[fragment] = changes[fragment];
        return values;
      }, getDateValues(this.state.value));
      var { year, month, day, hours, minutes, seconds } = values;
      newValue = new Date(year, month, day, hours, minutes, seconds);
    }
    this.setState({ value: newValue }, () => {
      this.props.onChange(this.state.value);
    });
  },

  render () {
    var children = recursivelyMapChildren(this.props.children, (child) => {
      return (child.type.datePickerChild) ? cloneWithProps(child, {
        value: this.state.value,
        onChange: this.handleChange
      }) : child;
    });
    return <div>{children}</div>;
  }

});

