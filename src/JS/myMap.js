//polyfill for array.map

Array.prototype.mapPolyfill = function (cb) {
  let result = [];
  if (typeof cb !== "function") {
    throw Error("cb is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

let arr = [10, 20, 30, 40];
console.log(arr.mapPolyfill((item) => item * 1000));
