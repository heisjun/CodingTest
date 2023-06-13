const files = [
  "img12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "img2.JPG",
];

//["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

//D+ => 숫자가 아닌 나머지
//d+ => 숫자로 이어진 것

//1.file.match(/(\D+)(\d+)/)) ==> [[img12],[img],[12]]
//2.HEAD 기준 대소문자 구분 없이 사전순 정렬
//3.둘이 동일하다면 NUMBER기준 오름차순

const reuslt = files
  .map((file) => file.match(/(\D+)(\d+)/))
  .sort((a, b) => {
    const upperCaseA = a[1].toUpperCase();
    const upperCaseB = b[1].toUpperCase();

    if (upperCaseA > upperCaseB) return 1;
    else if (upperCaseA < upperCaseB) return -1;
    else {
      const numA = parseInt(a[2]);
      const numB = parseInt(b[2]);
      return numA - numB;
    }
  })
  .map((i) => i.input);
console.log(reuslt);
