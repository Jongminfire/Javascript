const arr = [1, 3, 5, 7, 9];

console.log(arr.map((v, idx) => v * 2)); // [2, 6, 10, 14, 18]

/*
Javascript map 함수는 요소를 돌며 function을 거친 return 값을 요소로 가지는 배열을 반환한다
*/

console.log(arr.reduce((acc, cur, idx, src) => acc + cur)); // 25

/*
Javascript reduce 함수는 요소를 돌며 function을 거치고 단 하나의 값을 반환한다.
 */

console.log(arr.forEach((v) => console.log(v))); // 1 3 5 7 9

/*
Javascript forEach 함수는 요소를 돌며 function을 실행합니다 (return X)
*/

console.log(arr.filter((v) => v > arr[2])); //  [7, 9]

/*
Javascript filter 함수는 요소를 돌며 functiond을 만족하는 요소를 배열로 반환한다.
*/
