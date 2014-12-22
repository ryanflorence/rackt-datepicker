module.exports = (year, month) => {
  var date = new Date(year, month-1, 1);
  var days = [];
  while (date.getMonth() === month-1) {
    days.push(date);
    var next = date.getDate() + 1;
    date = new Date();
    date.setDate(next);
  }
  return days;
};
