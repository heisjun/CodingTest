const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

let answer = 1;

let obj = {};
for (var i = 0; i < clothes.length; i++) {
  obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
}

for (let idx in obj) {
  answer *= obj[idx];
}

console.log(answer - 1);
