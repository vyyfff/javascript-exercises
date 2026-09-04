const sumAll = function (a, b) {
  if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    arr = [];
    arr.push(min);
    for (let i = min + 1; i < max; i++) {
      arr.push(i);
    }
    arr.push(max);
    return arr.reduce((total, current) => total + current);
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
