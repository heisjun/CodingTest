const priorities = [2, 1, 3, 2];
let arr = [];
const location = 2;
for (let i = 0; i < priorities.length; i++) {
  arr.push({ location: i, priority: priorities[i] });
}

let answer = [];

while (arr.length > 0) {
  let max = arr[0].priority;
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i].priority) {
      max = arr[i].priority;
    }
  }
  while (arr[0].priority !== max) {
    arr.push(arr[0]);
    arr.shift();
  }
  answer.push(arr.shift());
}

let result = answer.findIndex((i) => i.location === location);
console.log(result + 1);
