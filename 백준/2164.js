let input = require("fs").readFileSync("example.txt").toString().trim();

let card = Array.from(Array(Number(input)), (item, idx) => idx + 1).reverse();

while (card.length != 1) {
  let temp = 0;
  card.pop();
  temp = card[card.length - 1];
  card.splice(0, 0, temp);
  card.pop();
}

console.log(card);
