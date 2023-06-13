const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
const skill = "CBD";
var answer = 0;
var regex = new RegExp(`[^${skill}]`, "g");

answer = skill_trees
  .map((x) => x.replace(regex, ""))
  .filter((x) => {
    return skill.indexOf(x) === 0 || x === "";
  }).length;

console.log(answer);
