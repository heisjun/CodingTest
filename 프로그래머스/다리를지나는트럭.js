const bridge_length = 2;
const weight = 10;
const truck_weight = [7, 4, 5, 6];

 bridge = Array.from({ length: bridge_length }, () => 0);
console.log(bridge);
let time = 0;
let fullWeight = 0;
//초기설정
time++;
fullWeight += truck_weight[0];
bridge.shift();
bridge.push(truck_weight.shift());

console.log(bridge);

while (fullWeight > 0) {
  time++;
  fullWeight -= bridge.shift();

  if (fullWeight + truck_weight[0] <= weight && truck_weight.length > 0) {
    fullWeight += truck_weight[0];
    bridge.push(truck_weight.shift());
    console.log(bridge);
  } else {
    bridge.push(0);
    console.log(bridge);
  }
}

console.log(time);
