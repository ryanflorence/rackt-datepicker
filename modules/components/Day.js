var React = require('react');
var getDaysForMonth = require('../utils/getDaysForMonth');
var pad = require('../utils/pad');
var cloneWithExclusions = require('../utils/cloneWithExclusions');

var Day = module.exports = React.createClass({
  displayName: 'Day',

  propTypes: {
    value: React.PropTypes.instanceOf(Date).isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  componentDidMount () {
    this.validateDay();
  },

  componentDidUpdate () {
    this.validateDay();
  },

  handleChange (event) {
    this.props.onChange(parseInt(event.target.value, 10));
  },

  validateDay () {
    var { value } = this.props;
    var days = getDaysForMonth(value.getFullYear(), value.getMonth());
    if (value.getDate() > days[days.length - 1].getDate())
      this.props.onChange(1);
  },

  render () {
    var { locale, value } = this.props;
    var days = getDaysForMonth(value.getFullYear(), value.getMonth());
    var options = days.map((day, index) => {
      var weekday = locale.days[day.getDay()];
      var dayIndex = index + 1;
      var text = `${pad(dayIndex)} ${weekday}`;
      return <option key={dayIndex} value={dayIndex}>{text}</option>;
    });
    var props = cloneWithExclusions(this.props, [
      'locale', 'onChange', 'value'
    ]);
    props.onChange = this.handleChange;
    props.value = value.getDate();
    return <select {...props}>{options}</select>;
  }
});

