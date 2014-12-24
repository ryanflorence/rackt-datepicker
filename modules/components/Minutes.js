var React = require('react');
var Sixty = require('../mixins/Sixty');

var Minutes = module.exports = React.createClass({

  displayName: 'Minute',

  mixins: [ Sixty ],

  getDefaultProps () {
    return { fragment: 'minutes' };
  },

  getValue (value) {
    return value.getMinutes();
  }

});

