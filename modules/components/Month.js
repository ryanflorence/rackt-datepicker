var React = require('react');
var pad = require('../utils/pad');
var FragmentSelect = require('../mixins/FragmentSelect');

var Month = module.exports = React.createClass({

  displayName: 'Month',

  mixins: [ FragmentSelect ],

  getDefaultProps () {
    return { fragment: 'month' };
  },

  getOnChangeValue (event) {
    return parseInt(event.target.value - 1, 10);
  },

  getValue (date) {
    return date.getMonth() + 1;
  },

  renderOptions () {
    var { locale, value } = this.props;
    return locale.months.map((monthName, monthIndex) => {
      var month = monthIndex + 1;
      //var text = `${pad(month)} ${monthName}`;
      var text = `${monthName}`;
      return <option key={month} value={month}>{text}</option>;
    });
  }

});

