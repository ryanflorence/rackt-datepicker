var React = require('react');
var Sixty = require('../mixins/Sixty');

var Seconds = module.exports = React.createClass({

  displayName: 'Minute',

  mixins: [ Sixty ],

  getDefaultProps () {
    return { fragment: 'seconds' };
  },

  getValue (value) {
    return value.getSeconds();
  }

});

