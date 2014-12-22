var numberRange = module.exports = (start, end) => {
  var length = end - start;
  var i = 0;
  var arr = [];
  while (i < length) {
    arr.push(start + i)
    i++;
  }
  return arr;
};

