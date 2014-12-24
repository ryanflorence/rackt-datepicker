var slug = () => {
  return Math.random().toString(16).slice(2, 10);
};

var today = new Date();
var tenYearsFromToday = new Date(today.getFullYear() + 10, 0, 1);
var tenYearsAgo = new Date(today.getFullYear() - 10, 0, 1);

var randomDate = () => {
  // make sure our random dates are always valid (1 year ahead)
  var thisYear = today.getFullYear();
  return new Date(
    randomInt(thisYear + 1, tenYearsFromToday.getFullYear()),
    randomInt(0, 11),
    randomInt(1, 28),
    randomInt(0, 23),
    randomInt(0, 59),
    randomInt(0, 59)
  );
};

var randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {
  slug,
  today,
  tenYearsFromToday,
  tenYearsAgo,
  randomDate,
  randomInt
};
