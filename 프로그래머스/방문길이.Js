const dirs = "LULLLLLLU";
//7

let pointX = 0;
let pointY = 0;
let prev = "00";
let set = new Set();
for (let i = 0; i < dirs.length; i++) {
  switch (dirs[i]) {
    case "U":
      if (pointY < 5) {
        pointY++;
        set.add(`${pointX}${pointY}${prev}`);
        set.add(`${prev}${pointX}${pointY}`);
        prev = `${pointX}${pointY}`;
      }
      break;
    case "D":
      if (pointY > -5) {
        pointY--;
        set.add(`${pointX}${pointY}${prev}`);
        set.add(`${prev}${pointX}${pointY}`);
        prev = `${pointX}${pointY}`;
      }
      break;
    case "L":
      if (pointX > -5) {
        pointX--;
        set.add(`${pointX}${pointY}${prev}`);
        set.add(`${prev}${pointX}${pointY}`);
        prev = `${pointX}${pointY}`;
      }
      break;
    case "R":
      if (pointX < 5) {
        pointX++;
        set.add(`${pointX}${pointY}${prev}`);
        set.add(`${prev}${pointX}${pointY}`);
        prev = `${pointX}${pointY}`;
      }
      break;
  }
}

console.log(set);
