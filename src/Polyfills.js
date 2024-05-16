//polyfill for map

function myMap(cb) {
  if (typeof cb !== "function") {
    throw Error("cb is not a function");
  }
  if (!this) {
    throw Error("array is undefined or null");
  }
  let outputArray = [];
  for (let i = 0; i < this.length; i++) {
    outputArray.push(cb(this[i], i, this));
  }
  return outputArray;
}

Array.prototype.myMap = myMap;

let inputArr = [10, 20, 30, 34, 45, 50];

console.log(
  "map",
  inputArr.myMap((item, i, arr) => item * 100)
);

//polyfill for filter

Array.prototype.myFilter = function (cb) {
  let filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) {
      filteredArr.push(cb(this[i]));
    }
  }
  return filteredArr;
};

console.log(
  "filter",
  [10, 22, 33, 45, 59].myFilter((item, i, arr) => {
    if (item % 2 === 0) {
      return item;
    }
  })
);

//polyfill for reduce

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = initialValue ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

console.log(
  "reduce",
  [1, 2, 3, 4].myReduce((acc, curr, i, arr) => acc + curr, 100)
);

Promise.allPolyfill = function (promises) {
  let completed = 0;
  let resultPromises = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((response) => {
          resultPromises[index] = response;
          completed++;
          if (completed === promises.length) {
            resolve(resultPromises);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.allPolyfill([
  Promise.resolve("promise 1 resolved"),
  new Promise((resolve) => resolve(setTimeout(() => "1000", 2000))),
  Promise.reject("promise 3 rejected"),
])
  .then((result) => console.log("promise all resolves", result))
  .catch((err) => console.log("promise all rejected", err));

//polyfill for flat
Array.prototype.flatArray = function (depth) {
  return flatten(this, depth);
};

function flatten(arr, depth) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item) && depth > 0)
      result.push(...flatten(item, depth - 1));
    else result.push(item);
  });
  return result;
}

console.log([10, 20, [30, 40, [50, 60]]].flatArray());
