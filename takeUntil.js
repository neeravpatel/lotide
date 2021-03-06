// function that will take in two parameters (array, callback)
const takeUntil = function(array, callback) {
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
  return result;
};

module.exports = takeUntil;