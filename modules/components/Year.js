var React = require('react');
var numberRange = require('../utils/numberRange');
var DateFragment = require('../mixins/DateFragment');

var Year = module.exports = React.createClass({

  displayName: 'Year',

  mixins: [ DateFragment ],

  getOnChangeValue (event) {
    return parseInt(event.target.value, 10);
  },

  render () {
    var { value, range } = this.props;
    var start = range[0].getFullYear();
    var end = range[1].getFullYear();
    var options = numberRange(start, end).map((year) => {
      return <option key={year} value={year}>{year}</option>;
    });
    var props = this.propsForComponent();
    props.value = value.getFullYear();
    return <select {...props}>{options}</select>;
  }

});

