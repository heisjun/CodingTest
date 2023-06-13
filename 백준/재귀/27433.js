let input = require("fs").readFileSync("example.txt").toString().trim();

const factorial = (n) => {
  if (n == 0 || n == 1) return 1;

  return n * factorial(n - 1);
};

console.log(factorial(input));
