const leapYears = function (year) {
  if (Number.isInteger(year / 100)) {
    return Number.isInteger(year / 400) ? true : false;
  } else {
    return Number.isInteger(year / 4);
  }
};

// Do not edit below this line
module.exports = leapYears;
