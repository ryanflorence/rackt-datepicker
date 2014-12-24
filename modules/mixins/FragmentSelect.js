var React = require('react');
var DateFragment = require('../mixins/DateFragment');

var FragmentSelect = module.exports = {

  mixins: [ DateFragment ],

  //getValue (date) {},

  //renderOptions () {},

  render () {
    var props = this.propsForComponent();
    props.value = this.getValue(this.props.value);
    return <select {...props}>{this.renderOptions()}</select>;
  }

};

