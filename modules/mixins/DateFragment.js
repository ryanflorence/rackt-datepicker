var React = require('react');
var cloneWithExclusions = require('../utils/cloneWithExclusions');

var DateFragment = module.exports = {

  propTypes: {
    value: React.PropTypes.instanceOf(Date).isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  handleChange (event) {
    this.props.onChange(this.getOnChangeValue(event));
  },

  propsForComponent () {
    var props = cloneWithExclusions(this.props, [
      'locale', 'onChange', 'value'
    ]);
    props.onChange = this.handleChange;
    return props;
  }

};

