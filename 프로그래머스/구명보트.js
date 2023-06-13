const people = [70, 80, 50];
const limit = 100;

let sortPeople = people.sort((a, b) => a - b);

let count = 0;
while (sortPeople.length !== 0) {
  if (sortPeople[0] + sortPeople[sortPeople.length - 1] <= limit) {
    count++;
    sortPeople.pop();
    sortPeople.shift();
  } else {
    count++;
    sortPeople.pop();
  }
}

console.log(count);
