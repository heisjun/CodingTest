let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let N = input.shift();
let numbers = input[0].split(" ").map(Number);
let calculate = input[1].split(" ").map(Number);

const chageOperator = (calculate) => {
  const cal = [];
  for (let i = 0; i < calculate.length; i++) {
    for (let j = 0; j < calculate[i]; j++) {
      if (i === 0) {
        cal.push("+");
      } else if (i === 1) {
        cal.push("-");
      } else if (i === 2) {
        cal.push("*");
      } else {
        cal.push("/");
      }
    }
  }
  return cal;
};

function solution(N, numbers, calculate) {
  const operator = chageOperator(calculate);
  const visited = Array(calculate.length).fill(false);
  const valid = [];
  let result = [];

  dfs(0);
  console.log(Math.max(...valid));
  console.log(Math.min(...valid));

  function dfs(count) {
    if (count === N - 1) {
      let answer = [];
      for (let i = 0; i < result.length; i++) {
        answer.push(result[i]);
      }
      valid.push(calculator(answer, numbers));
    }

    for (let i = 0; i < N - 1; i++) {
      if (!visited[i]) {
        visited[i] = true;
        result[count] = operator[i];
        dfs(count + 1);
        visited[i] = false;
      }
    }
  }

  function calculator(arr, numbers) {
    let result = numbers[0];
    for (let i = 0; i < arr.length; i++) {
      result = calculateWithOperate(result, numbers[i + 1], arr[i]);
    }
    return result;
  }

  function calculateWithOperate(a, b, c) {
    switch (c) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        a = Math.abs(a);
        if (a < 0) return -Math.floor(a / b);
        return Math.floor(a / b);
    }
  }
}

solution(N, numbers, calculate);
