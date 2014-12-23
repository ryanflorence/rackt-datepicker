var React = require('react');
var getDaysForMonth = require('../utils/getDaysForMonth');
var pad = require('../utils/pad');
var DateFragment = require('../mixins/DateFragment');

var Day = module.exports = React.createClass({
  displayName: 'Day',

  mixins: [ DateFragment ],

  getOnChangeValue (event) {
    return parseInt(event.target.value, 10);
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
    var props = this.propsForComponent();
    props.value = value.getDate();
    return <select {...props}>{options}</select>;
  }
});

