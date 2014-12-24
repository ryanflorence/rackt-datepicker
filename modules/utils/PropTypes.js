var { shape, string, arrayOf, instanceOf } = require('react').PropTypes;
var date = instanceOf(Date);
var warning = require('react/lib/warning');

var PropTypes = module.exports = {
  locale: shape({
    months: arrayOf(string),
    days: arrayOf(string)
  }).isRequired,

  range (props, propName, componentName) {
    var prop = props[propName];
    warning(prop.length === 2, 'A `range` property must have a length of `2`. Please check `'+componentName+'`');
    var [ start, end ] = prop;
    warning(start instanceof Date && end instanceof Date, 'A `range` property must be an array of `Date` instances. Please check `'+componentName+'`');
    warning(start <= end, 'A `range` property must have a length of `2`. Please check `'+componentName+'`');
  }
};

