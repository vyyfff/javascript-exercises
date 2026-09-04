const repeatString = function (str, num) {
  res = "";

  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      res += str;
    }
    return res;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
