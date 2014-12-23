var React = require('react');
var pad = require('../utils/pad');
var DateFragment = require('../mixins/DateFragment');

var Month = module.exports = React.createClass({

  displayName: 'Month',

  mixins: [ DateFragment ],

  getOnChangeValue (event) {
    return parseInt(event.target.value - 1, 10);
  },

  render () {
    var { locale, value, range } = this.props;
    var options = locale.months.map((monthName, monthIndex) => {
      var month = monthIndex + 1;
      //var text = `${pad(month)} ${monthName}`;
      var text = `${monthName}`;
      return <option key={month} value={month}>{text}</option>;
    });
    var props = this.propsForComponent();
    props.value = value.getMonth() + 1;
    return <select {...props}>{options}</select>;
  }

});

