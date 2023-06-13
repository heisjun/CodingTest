const numbers = [1, 10, 100, 1000, 818, 81, 898, 89, 0, 0];
//"9534330"
numbers.sort().reverse();

let isreturn = true;
while (isreturn) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    let compareA = Number(String(numbers[i]) + String(numbers[i + 1]));
    let compareB = Number(String(numbers[i + 1]) + String(numbers[i]));
    if (compareA < compareB) {
      let temp = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i + 1] = temp;
      count++;
    }
  }
  if (count > 0) {
    isreturn = true;
  } else {
    isreturn = false;
  }
}

console.log(numbers.join(""));
