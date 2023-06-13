const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];
//["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

let chatRoom = new Map();
record.map((i) => {
  let arr = i.split(" ");
  if (arr[0] === "Enter" || arr[0] === "Change") {
    chatRoom.set(arr[1], arr[2]);
  }
});
let answer = [];
record.map((i) => {
  let arr = i.split(" ");
  if (arr[0] === "Enter") {
    answer.push(`${chatRoom.get(arr[1])}님이 들어왔습니다.`);
  } else if (arr[0] === "Leave") {
    answer.push(`${chatRoom.get(arr[1])}님이 나갔습니다.`);
  }
});

console.log(answer);
