function stringToObject(str, finalValue) {
  let result = {};
  let current = result;
  let keys = str.split(".");
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      current[keys[i]] = finalValue;
    } else {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
    console.log(current);
  }
  return result;
}

// console.log(stringToObject("a.b", "mani"));

function fibonacci() {}

function getObject(object, path) {
  let currentObj = object;
  const keys = path.split(".");
  for (const key of keys) {
    if (currentObj.hasOwnProperty(key)) {
      currentObj = currentObj[key];
    } else {
      return undefined;
    }
  }
  return currentObj;
}

const person = {
  name: "thilak",
  age: 22,
  address: {
    plotNo: "2022",
    street: "abc street",
    city: "madurai",
    pincode: "121312",
    country: "india",
  },
};

console.log("get plotno from person", getObject(person, "address.plotNo"));

let cart = [
  { item: "shoe", quantity: 2, price: 200 },
  { item: "bat", quantity: 1, price: 100 },
];

console.log(
  cart.reduce(
    (acc, currentItem) => acc + currentItem.quantity * currentItem.price,
    0
  )
);
