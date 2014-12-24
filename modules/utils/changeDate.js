var getDateValues = require('./getDateValues');

var changeDate = module.exports = (date, changes) => {
  var values = Object.keys(changes).reduce((values, fragment) => {
    values[fragment] = changes[fragment];
    return values;
  }, getDateValues(date));
  var { year, month, day, hours, minutes, seconds } = values;
  return new Date(year, month, day, hours, minutes, seconds);
};

