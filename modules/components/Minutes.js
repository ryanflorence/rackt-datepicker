var React = require('react');
var Sixty = require('../mixins/Sixty');

var Minutes = module.exports = React.createClass({

  displayName: 'Minutes',

  statics: {
    datePickerChild: true
  },

  mixins: [ Sixty ],

  getValue (value) {
    return value.getMinutes();
  }

});

