var getDateValues = module.exports = (value) => {
  return {
    year: value.getFullYear(),
    month: value.getMonth(),
    day: value.getDate(),
    hours: value.getHours(),
    minutes: value.getMinutes(),
    seconds: value.getSeconds()
  };
};

