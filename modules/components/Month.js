var React = require('react');
var pad = require('../utils/pad');
var normalizeDay = require('../utils/normalizeDay');
var FragmentSelect = require('../mixins/FragmentSelect');
var Locale = require('../mixins/Locale');

var Month = module.exports = React.createClass({

  displayName: 'Month',

  statics: {
    datePickerChild: true
  },

  mixins: [ FragmentSelect, Locale ],

  getOnChangeValue (event) {
    var { value } = this.props;
    var year = value.getFullYear();
    var month = parseInt(event.target.value - 1, 10);
    var day = normalizeDay(year, month, value.getDate());
    return { month, day };
  },

  getValue (date) {
    return date.getMonth() + 1;
  },

  renderOptions () {
    var { locale, value } = this.props;
    return locale.months.map((monthName, monthIndex) => {
      var month = monthIndex + 1;
      var text = `${pad(month)} ${monthName}`;
      return <option key={month} value={month}>{text}</option>;
    });
  }

});

