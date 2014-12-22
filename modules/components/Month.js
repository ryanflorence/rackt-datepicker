var React = require('react');
var pad = require('../utils/pad');

var Month = module.exports = React.createClass({
  displayName: 'Month',

  propTypes: {
    value: React.PropTypes.instanceOf(Date).isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  handleChange (event) {
    var { value } = this.props;
    var newDate = new Date(
      value.getFullYear(),
      parseInt(event.target.value - 1, 10),
      value.getDate()
    );
    this.props.onChange(newDate);
  },

  render () {
    var options = this.props.locale.months.map((monthName, index) => {
      var monthIndex = index + 1;
      var text = `${pad(monthIndex)} ${monthName}`;
      return <option key={monthIndex} value={monthIndex}>{text}</option>;
    });
    return <select
      value={this.props.value.getMonth()+1}
      onChange={this.handleChange}
    >{options}</select>;
  }
});


