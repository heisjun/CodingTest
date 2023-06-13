const names = "JBAABAAAAAZZ";
// A B C D E F G H I J K  L  M  N  O  P  Q  R S T U V W X Y Z
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 12 11 10 9 8 7 6 5 4 3 2 1
const joyStick = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3,
  2, 1,
];

let count = 0;
const arr = names.split("");
for (let i = 0; i < arr.length; i++) {
  count += joyStick[arr[i].charCodeAt(0) - 65];
}
//JBAAAAAAAAZZ

let startA = arr.length;
let endA = 0;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] == "A" && arr[i + 1] == "A") {
    startA = Math.min(startA, i);
    endA = Math.max(endA, i + 1);
  }
}
console.log(startA, endA);
