var PropTypes = require('../utils/PropTypes');
var enUS = require('../locale/enUS');

var Locale = module.exports = {
  propTypes: {
    locale: PropTypes.locale
  },

  getDefaultProps () {
    return { locale: enUS };
  }
};

