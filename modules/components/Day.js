var React = require('react');
var getDaysForMonth = require('../utils/getDaysForMonth');
var pad = require('../utils/pad');
var FragmentSelect = require('../mixins/FragmentSelect');

var Day = module.exports = React.createClass({

  displayName: 'Day',

  mixins: [ FragmentSelect ],

  getOnChangeValue (event) {
    return { day: parseInt(event.target.value, 10) };
  },

  getValue (date) {
    return date.getDate();
  },

  renderOptions () {
    var { locale, value } = this.props;
    var days = getDaysForMonth(value.getFullYear(), value.getMonth());
    return days.map((day, index) => {
      var weekday = locale.days[day.getDay()];
      var dayIndex = index + 1;
      var text = `${pad(dayIndex)} ${weekday}`;
      return <option key={dayIndex} value={dayIndex}>{text}</option>;
    });
  }

});

