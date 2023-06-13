const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
const skill = "CBD";
//2

let arr = skill.split("");
let idxArr = [];
skill_trees.map((item) => {
  let skillsIndex = [];
  for (let i = 0; i < arr.length; i++) {
    let itemIdx = item.indexOf(arr[i]) === -1 ? 27 : item.indexOf(arr[i]);
    skillsIndex.push(itemIdx);
  }
  idxArr.push(skillsIndex);
});

let count = 0;
for (let i = 0; i < idxArr.length; i++) {
  let isCheck = false;
  for (let j = 0; j < idxArr[i].length - 1; j++) {
    if (idxArr[i][j] > idxArr[i][j + 1]) {
      isCheck = true;
    }
  }
  if (!isCheck) {
    count++;
  }
  isCheck = false;
}

console.log(count);
