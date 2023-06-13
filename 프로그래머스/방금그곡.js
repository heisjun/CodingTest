const musicinfos = [
  "12:00,12:14,HELLO,C#DEFGAB",
  "13:00,13:05,WORLD,ABCDEF",
  "13:00,13:15,TEST,ABCDEF",
];
let m = "ABC";
m = m.replace(/(C|D|F|G|A)#/g, (_, a) => a.toLowerCase());
const music = [];
//CC#BCC#BCC#BCC#BAA#

for (let i = 0; i < musicinfos.length; i++) {
  let startTime = musicinfos[i].split(",")[0];
  let startTimeHour = Number(startTime.split(":")[0]);
  let startTimeMinute = Number(startTime.split(":")[1]);
  let endTime = musicinfos[i].split(",")[1];
  let endTimeHour = Number(endTime.split(":")[0]);
  let endTimeMinute = Number(endTime.split(":")[1]);
  let time =
    endTimeHour * 60 + endTimeMinute - startTimeHour * 60 - startTimeMinute;
  let title = musicinfos[i].split(",")[2];
  let code = musicinfos[i].split(",")[3];
  code = code.replace(/(C|D|F|G|A)#/g, (_, a) => a.toLowerCase());
  //C#DEFGAB
  let fullcode = "";

  for (let i = 0; i < time; i++) {
    fullcode += code[i % code.length];
  }

  music.push({
    time: time,
    title: title,
    fullcode: fullcode,
  });
}

const answer = [];

for (let i = 0; i < music.length; i++) {
  if (music[i].fullcode.includes(m)) {
    answer.push(music[i]);
  }
}

console.log(answer);
if (answer.length === 0) {
  console.log("(None)");
} else if (answer.length > 1) {
  let max = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].time > answer[max].time) {
      max = i;
    }
  }
  console.log(answer[max].title);
} else {
  console.log(answer[0].title);
}
