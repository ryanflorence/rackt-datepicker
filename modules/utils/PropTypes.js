var { shape, string, arrayOf } = require('react').PropTypes;

var PropTypes = module.exports = {
  locale: shape({
    months: arrayOf(string),
    days: arrayOf(string)
  }).isRequired
};

