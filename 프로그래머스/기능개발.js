const progresses = [95, 95, 95, 95];
const speeds = [4, 3, 2, 1];
//99 98 97 96
//103 101 99 97
const answer = [];

while (progresses.length > 0) {
  for (let i = 0; i < progresses.length; i++) {
    progresses[i] += speeds[i];
  }
  let count = 0;
  while (true) {
    if (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    } else {
      break;
    }
  }

  if (count > 0) {
    answer.push(count);
  }
}

console.log(answer);
