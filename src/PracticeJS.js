let flattendResult = [];

function flattenArray(val) {
  for (let i = 0; i < val.length; i++) {
    if (Array.isArray(val[i])) {
      flattenArray(val[i]);
    } else {
      flattendResult.push(val[i]);
    }
  }
  return flattendResult;
}

Array.prototype.flatArray = function () {
  return flattenArray(this);
};

// console.log(
//   [1, 5, 6, [3, [6], [10, "anil", "kap", ["inner", "21", 100]]]].flatArray()
// );

Array.prototype.myMap = function (callback) {
  let result = [];
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
};

// const mappedArray = [10, 20, 30, 40].myMap((item) => item * 100);
// console.log("map", mappedArray);

String.prototype.myConcat = function (inputString) {
  let string = this;
  return string + inputString;
};

let string1 = "thilakmani";

// console.info("concat", string1.myConcat("mani"));

Array.prototype.ownConcat = function (...args) {
  let outputArr = this;
  function pushValues(val) {
    outputArr.push(val);
  }
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      for (let index = 0; index < args[i].length; index++) {
        pushValues(args[i][index]);
      }
    } else {
      pushValues(args[i]);
    }
  }
  return outputArr;
};

// console.log(
//   [10, 20, 30].ownConcat(
//     [40, 50],
//     [60, 70],
//     undefined,
//     null,
//     () => {},
//     [90, 100]
//   )
// );

function customPromiseAll(promisesList) {
  return new Promise((resolve, reject) => {
    let resolvedPromises = [];
    promisesList.forEach((task, index) => {
      task
        .then((data) => {
          resolvedPromises[index] = data;
          if (index === promisesList.length - 1) {
            resolve(promisesList);
          }
        })
        .catch((err) => reject(err));
    });
  });
}

function DummyAPI(delay, shouldFail) {
  return new Promise((resolve, reject) => {
    if (shouldFail) {
      setTimeout(() => {
        console.log("rejecting", delay);
        reject("rejected");
      }, delay);
    }
    setTimeout(() => {
      console.log("resolving", delay);
      resolve(delay);
    }, delay);
  });
}

const PromiseArr = [
  // DummyAPI(1000),
  // DummyAPI(2000),
  // DummyAPI(3000),
  // () => {
  //   console.log("func");
  // },
  // DummyAPI(6000, true),
];

// Promise.all(PromiseArr)
//   .then((data) => console.info("promise all", data))
//   .catch((err) => console.log("promise all", err));

//calling custom promise all

// customPromiseAll(PromiseArr)
//   .then((data) => console.info("custom promise all", data))
//   .catch((err) => console.log("custom promise all", err));

//calling promise all settled

// Promise.allSettled(PromiseArr)
//   .then((data) => console.log("allsettled resolved", data))
//   .catch((err) => console.log("allsettled rejected", err));

function customPromiseAllSettled(promisesList) {
  let outputPromisesList = promisesList.map((task) =>
    Promise.resolve(task)
      .then((value) => ({
        status: "fulfilled",
        value,
      }))
      .catch((reason) => ({
        status: "rejected",
        reason,
      }))
  );
  return Promise.all(outputPromisesList);
}

//calling custom promise all settled

// const promiseAllSettled = customPromiseAllSettled(PromiseArr);

// promiseAllSettled.then((data) =>
//   console.log("custom promise all settled", data)
// );

// compose and pipe

function addTax(basePrice) {
  return basePrice + 10;
}

function reduceSaleOffer(basePrice) {
  return basePrice * 0.8;
}

function multply(count, price) {
  return count * price;
}

function discount(offerPrice, price) {
  return price - offerPrice;
}

// const totalPrice = multiply(5, addTax(100))

function add(x) {
  return function (y) {
    return function (z) {
      return z * y * x;
    };
  };
}

// console.log("addedresult", add(10)(5)(4));

// [10, 20, 30, 40, 50].reduce((acc, currentValue, currentIndex) => {
//   console.info("acc", acc);
//   console.info("currentvalue", currentValue);
//   console.info("currentIndex", currentIndex);
// }, 100);

function compose(...functions) {
  return function (args) {
    return functions.reduceRight((arg, fn) => {
      return fn(arg);
    }, args);
  };
}

function pipe(...functions) {
  return function (args) {
    return functions.reduce((arg, fn) => {
      return fn(arg);
    }, args);
  };
}

const evalute = compose(reduceSaleOffer, addTax);
const evalute1 = pipe(addTax, reduceSaleOffer);

console.log("composed", evalute(1000));
console.log("composed", evalute1(1000));

//find no of occurences in string

function findOccurrene(str) {
  let res = {};
  if (typeof str !== "string") {
    throw Error("input is not a string");
  }
  for (let char of str) {
    if (res[char]) res[char] = res[char] + 1;
    else res[char] = 1;
  }
  return res;
}

console.log(findOccurrene("asdkmaosjasdk"));

//linkedlist

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addToLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
  }
}

//memoize

function memoize(func, context) {
  let result = {};
  return function (...args) {
    let argsString = JSON.stringify(args);
    if (!result[argsString]) {
      result[argsString] = func.apply(context || this, args);
    }
    return result[argsString];
  };
}

const twoSum = (first, second) => {
  let values = [];
  for (let i = 0; i < 10000000; i++) {
    values[i] = i + 1;
  }
  return first + second;
};

const memoizedTwoSum = memoize(twoSum);

console.time("memoize");
console.log(memoizedTwoSum(100, 200));
console.timeEnd("memoize");
console.time("memoize1");
console.log(memoizedTwoSum(100, 200));
console.timeEnd("memoize1");
