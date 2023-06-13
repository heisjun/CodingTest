let input = require("fs").readFileSync("example.txt").toString();
const len = input.length / 2;

const left = input.slice(0, parseInt(len));
//slice 함수는 첫 인자의 인덱스 부터 두 번째 인자의 인덱스 -1 의 값을 반환

const rignt = input.slice(Number.isInteger(len) ? len : parseInt(len) + 1);

//len이 정수면 짝수 정수가 아니면 홀수임을 이용하여 비교할 오른쪽 구문을 구분
const reverseRight = rignt.split("").reverse().join("");

console.log(left === reverseRight ? 1 : 0);
