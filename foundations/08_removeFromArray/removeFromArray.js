const removeFromArray = function (arr = [], ...toRemove) {
  for (item of toRemove) {
    arr = arr.filter((x) => x !== item);
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
