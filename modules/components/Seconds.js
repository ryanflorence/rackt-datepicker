var React = require('react');
var Sixty = require('../mixins/Sixty');

var Seconds = module.exports = React.createClass({

  displayName: 'Minutes',

  mixins: [ Sixty ],

  getValue (value) {
    return value.getSeconds();
  }

});

