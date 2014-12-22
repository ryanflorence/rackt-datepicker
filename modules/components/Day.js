var React = require('react');
var getDaysForMonth = require('../utils/getDaysForMonth');
var pad = require('../utils/pad');

// handle month change and day doesn't exist

var Day = module.exports = React.createClass({
  propTypes: {
    selectedDay: React.PropTypes.number.isRequired,
    selectedMonth: React.PropTypes.number.isRequired,
    selectedYear: React.PropTypes.number.isRequired
  },

  render () {
    var { locale, selectedYear, selectedMonth, selectedDay } = this.props;
    var days = getDaysForMonth(selectedYear, selectedMonth);
    var options = days.map((day, index) => {
      var weekday = locale.days[day.getDay()];
      var dayIndex = index + 1;
      return <option key={day} value={dayIndex}>{pad(dayIndex)} {weekday}</option>
    });
    return <select defaultValue={selectedDay}>{options}</select>;
  }
});

