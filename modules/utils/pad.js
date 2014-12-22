var pad = module.exports = (number) => {
  var numberAsString = number + '';
  var length = numberAsString.length;
  return length === 1 ? '0'+numberAsString : numberAsString;
};

