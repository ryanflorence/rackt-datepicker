var React = require('react');
var getDaysForMonth = require('../utils/getDaysForMonth');
var pad = require('../utils/pad');

// handle month change and day doesn't exist

var Day = module.exports = React.createClass({
  displayName: 'Day',

  propTypes: {
    selectedDay: React.PropTypes.number.isRequired,
    selectedMonth: React.PropTypes.number.isRequired,
    selectedYear: React.PropTypes.number.isRequired,
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
    var { selectedYear, selectedMonth, selectedDay } = this.props;
    var days = getDaysForMonth(selectedYear, selectedMonth);
    if (selectedDay > days[days.length - 1].getDate())
      this.props.onChange(1);
  },

  render () {
    var { locale, selectedYear, selectedMonth, selectedDay } = this.props;
    var days = getDaysForMonth(selectedYear, selectedMonth);
    var options = days.map((day, index) => {
      var weekday = locale.days[day.getDay()];
      var dayIndex = index + 1;
      var text = `${pad(dayIndex)} ${weekday}`;
      return <option key={dayIndex} value={dayIndex}>{text}</option>;
    });
    return <select
      onChange={this.handleChange}
      defaultValue={selectedDay}
    >{options}</select>;
  }
});

