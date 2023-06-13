const p = "()))((()";

let answer = [];
let u = "";
let v = "";
const dfs = (p) => {
  if (p.length === 0) {
    return "";
  }
  stage1(p);
  console.log("u값:", u);
  console.log("v값:", v);
  if (test(u)) {
    console.log("올바른과정");
    answer.push(u);
    dfs(v);
  } else {
    console.log("올바르지않은과정");
    answer.push(notCorrect(u, v));
  }
};

const dfs1 = (p) => {
  if (p.length === 0) {
    return "";
  }
  stage1(p);
  console.log("u값:", u);
  console.log("v값:", v);
  if (test(u)) {
    console.log("올바른과정");
    answer.push(u);
    dfs(v);
  } else {
    console.log("올바르지않은과정");
    answer.push(notCorrect(u, v));
  }
};

function stage1(p) {
  let openCount = 0;
  let closeCount = 0;
  let cursor = 0;
  while (true) {
    if (p[cursor] === "(") {
      openCount++;
    } else {
      closeCount++;
    }
    if (openCount === closeCount) {
      break;
    }
    cursor++;
  }
  u = p.slice(0, cursor + 1);
  v = p.slice(cursor + 1);
}

function test(str) {
  let stack = [str[0]];
  for (let i = 1; i < str.length; i++) {
    stack.push(str[i]);
    if (stack[stack.length - 2] === "(" && stack[stack.length - 1] === ")") {
      stack.pop();
      stack.pop();
    }
  }
  console.log("스택:", stack);
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

function notCorrect(u, v) {
  let newStr = "(";
  let newV = dfs(v);
  newStr = newStr + newV + ")";
  let newU = u.slice(1, -1);
  for (let i = 0; i < newU.length; i++) {
    if (newU[i] === "(") {
      newStr += ")";
    } else if (newU[i] === ")") {
      newStr += "(";
    }
  }

  return newStr;
}

dfs(p);
console.log(answer);
