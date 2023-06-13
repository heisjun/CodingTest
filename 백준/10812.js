let input = require("fs").readFileSync("example.txt").toString().split("\n");
//['10 5','1 6 4','3 9 8',...]

input = input.map((item) => item.split(" "));
//[[10,5],[1,6,4],[3,9,8],...]

const [N, M] = input.shift();
//shift는 배열의 첫번째 요소를 추출(제거)하고 반환
//[N,M] = [10,5]
//input = [[1,6,4],[3,9,8],...]

const arr = Array.from(Array(Number(N)), (item, idx) => idx + 1);
//N개의 개수만큼 새로운 배열 생성하는데 1부터 시작하는 바구니이기 때문에 +1하여 생성

for (let i = 0; i < M; i++) {
  let startIdx = input[i][0] - 1;
  let endIdx = input[i][1] - 1;
  let midIdx = input[i][2] - 1;

  //input에서 시작,중간,끝 인덱스를 추출하는데 input에 들어있는 값들은 인덱스 값이 아닌 순번이기 때문에 -1씩 하여 사용할 인덱스로 변환

  const extractItem = arr.splice(midIdx, endIdx - midIdx + 1);
  //mid부터 end번째 까지의 요소들이 begin번째 앞으로 오는 바구니 순서바꾸기 때문에 이동할 요소를 추출.

  arr.splice(startIdx, 0, ...extractItem);
}

console.log(arr.join(" "));
//배열의 모든요소를 하나으 문자열로 변환하는데 형식에 맞춰 " "하여 join
