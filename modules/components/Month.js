var React = require('react');
var pad = require('../utils/pad');

var Month = module.exports = React.createClass({
  render () {
    var options = this.props.locale.months.map((monthName, index) => {
      var monthIndex = index + 1;
      return (
        <option value={monthIndex}>
          {pad(monthIndex)} {monthName}
        </option>
      );
    });
    return <select defaultValue={this.props.selectedMonth}>{options}</select>;
  }
});


