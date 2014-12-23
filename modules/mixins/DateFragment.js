var React = require('react');
var cloneWithExclusions = require('../utils/cloneWithExclusions');

var DateFragment = module.exports = {

  propTypes: {
    range: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Date)),
    value: React.PropTypes.instanceOf(Date).isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  handleChange (event) {
    this.props.onChange(this.getOnChangeValue(event));
  },

  propsForComponent () {
    var props = cloneWithExclusions(this.props, [
      'locale', 'onChange', 'value', 'range'
    ]);
    props.onChange = this.handleChange;
    return props;
  }

};

