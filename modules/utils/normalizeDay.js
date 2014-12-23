var getDaysForMonth = require('../utils/getDaysForMonth');

var normalizeDay = module.exports = (fullYear, month, day) => {
  var days = getDaysForMonth(fullYear, month);
  var lastDayOfTheMonth = days[days.length - 1].getDate();
  return (day > lastDayOfTheMonth) ? lastDayOfTheMonth : day;
};

