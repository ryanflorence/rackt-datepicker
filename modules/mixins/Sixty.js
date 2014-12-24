var React = require('react');
var pad = require('../utils/pad');
var FragmentSelect = require('../mixins/FragmentSelect');
var numberRange = require('../utils/numberRange');

var Sixty = module.exports = {

  mixins: [ FragmentSelect ],

  getOnChangeValue (event) {
    return parseInt(event.target.value, 10);
  },

  renderOptions () {
    return numberRange(0, 59).map((n) => {
      return <option key={n} value={n}>{pad(n)}</option>;
    });
  }

};

