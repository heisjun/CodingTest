const numbers = [0, 0];

let arr = numbers.map((i) => String(i)).sort((a, b) => b + a - (a + b));

console.log(arr.join(""));
