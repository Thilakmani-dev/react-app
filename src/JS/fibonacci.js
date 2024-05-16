function fibonacci(n) {
  let numbers = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 1] + numbers[i - 2]);
  }
  console.log(numbers);
  return numbers[n];
}

function fibonacci2(n) {
  //fibonacci by recursive
  if (n <= 1) return n;
  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

console.log(fibonacci2(10));
