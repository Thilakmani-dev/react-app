function myReduce(cb, initialValue) {
  let acc = initialValue;
  for (let index = 0; index < this.length; index++) {
    acc = acc ? cb(acc, this[index]) : this[index];
  }
  return acc;
}

Array.prototype.myReduce = myReduce;

const arr = [10, 20, 30, 50, 80];

console.log(arr.myReduce((acc, curr) => acc + curr, 1000));
