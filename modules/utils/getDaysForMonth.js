module.exports = (year, month) => {
  var makeDate = () => new Date(year, month, 1);
  var date = makeDate();
  var days = [];
  while (date.getMonth() === month) {
    days.push(date);
    var next = date.getDate() + 1;
    date = makeDate();
    date.setDate(next);
  }
  return days;
};
