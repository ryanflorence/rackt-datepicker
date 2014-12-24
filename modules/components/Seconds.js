var React = require('react');
var Sixty = require('../mixins/Sixty');

var Seconds = module.exports = React.createClass({

  displayName: 'Seconds',

  statics: {
    datePickerChild: true
  },

  mixins: [ Sixty ],

  getValue (value) {
    return value.getSeconds();
  }

});

