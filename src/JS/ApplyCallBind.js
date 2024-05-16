const Person1 = {
  firstName: "thilak",
  getName: function (age) {
    return `name is ${this.firstName}, age: ${age}`;
  },
};

const Person = {
  firstName: "vimal",
};

// console.log(Person1.getName.call(Person, 40));

// console.log(Person1.getName.apply(Person, [50]));

// const getAge = Person1.getName.bind(Person);

// console.log(getAge(100));

//polyfill for call

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("its not callable");
  }
  context.fn = this;
  context.fn(...args);
};

//polyfill for apply

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("its not callable");
  }
  context.fn = this;
  context.fn(...args);
};

//polyfill for bind

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("its not callable");
  }
  context.fn = this;
  return function (...newArgs) {
    context.fn(...args, ...newArgs);
  };
};

const Car = {
  color: "black",
};

const Car1 = {
  color: "blue",
};

function displayCar(company) {
  console.log(`${this.color} ${company}`);
}

displayCar.myCall(Car1, "lamborgini");
displayCar.myCall(Car, "ferrai");
const displayCar1 = displayCar.myBind(Car);
// console.log(displayCar1);
displayCar1("benz");
