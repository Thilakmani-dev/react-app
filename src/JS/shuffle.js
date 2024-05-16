//shuffle
const arr = ["mani", "jega", "vimal", "ajit", "madhu"];

function shuffle(array) {
  let usedIndices = [];
  let res = [];
  let i = 0;
  while (i < array.length) {
    let randomNumber = Math.floor(Math.random() * array.length);
    if (!usedIndices.includes(randomNumber)) {
      res.push(array[randomNumber]);
      usedIndices.push(randomNumber);
      i++;
    }
  }
  return res;
}

console.log(shuffle(arr));
