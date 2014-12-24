var React = require('react');
var numberRange = require('../utils/numberRange');
var FragmentSelect = require('../mixins/FragmentSelect');

var Year = module.exports = React.createClass({

  displayName: 'Year',

  mixins: [ FragmentSelect ],

  getDefaultProps () {
    var today = new Date();
    return {
      range: [
        new Date(today.getFullYear() - 10, today.getMonth()),
        new Date(today.getFullYear() + 10, today.getMonth())
      ]
    };
  },

  getOnChangeValue (event) {
    return { year: parseInt(event.target.value, 10) };
  },

  renderOptions () {
    var { range } = this.props;
    var start = range[0].getFullYear();
    var end = range[1].getFullYear();
    return numberRange(start, end).map((year) => {
      return <option key={year} value={year}>{year}</option>;
    });
  },

  getValue (date) {
    return date.getFullYear();
  }

});

