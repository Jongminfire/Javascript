// 배열 만들기

let arr = [1, 2, 3, 4];

// 10의 길이를 가진 배열 생성

let empty = new Array(10); // [empty × 10]
let visited = new Array(10).fill(false); // [false, false, false, false, false, false, false, false, false, false]

// 5x5 2차원 배열 생성

const arr1 = Array.from(Array(5), () => new Array(5)); //[Array(5), Array(5), Array(5), Array(5), Array(5)]
const visited2 = Array.from(Array(5), () => new Array(5).fill(false));

/*
[
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],
]
*/

// 배열 맨 끝에 요소 추가 및 삭제

let temp = [1, 2, 3];

temp.push(4); // [1,2,3,4]
temp.pop(); // [1,2,3]  (return 값은 4)

// 배열 맨 앞에 요소 추가 및 삭제

let temp2 = ["a", "b", "c"];

temp2.unshift("d"); // ['d', 'a', 'b', 'c']
temp2.shift(); // ['a','b','c'] (return 값은 'd')

// 배열 요소 검색

let fruit = ["사과", "딸기", "바나나"];

console.log(fruit.indexOf("딸기")); // 1 , 요소의 인덱스 반환
console.log(fruit.indexOf("포도")); // -1 , 배열에 요소 없으면 -1 반환

// 배열 인덱스 삭제

let temp3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

temp3.splice(3, 1); // [1, 2, 3, 5, 6, 7, 8, 9] , 3번째 인덱스부터 1개 요소 삭제   (return 값은 [4])

let temp4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

temp4.splice(2, 5); // [1, 2, 8, 9] , 2번째 인덱스부터 5개 요소 삭제 (return 값은 [3, 4, 5, 6, 7])

// 배열의 길이 얻기

let temp5 = [1, 2, 3, 4, 5];

console.log(temp5.length); // 5

// 배열 복사하기

const origin = ["a", "b", "c"];

let copy1 = [...origin];
let copy2 = origin.slice();
