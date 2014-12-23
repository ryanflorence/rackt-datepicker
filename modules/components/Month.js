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
    var { locale, value } = this.props;
    var options = locale.months.map((monthName, index) => {
      var monthIndex = index + 1;
      //var text = `${pad(monthIndex)} ${monthName}`;
      var text = `${monthName}`;
      return <option key={monthIndex} value={monthIndex}>{text}</option>;
    });
    var props = this.propsForComponent();
    props.value = value.getMonth() + 1;
    return <select {...props}>{options}</select>;
  }
});

