const arr = [1, 5, 7, 8, 10, 15, 17, 30, 26];

console.log(Math.max(...arr));
console.log(Math.min(...arr));

/*
Javascript에서 주어진 값에대한 최대값과 최소값은 Math.max(), Math.min()으로 찾을 수 있다.
파라미터는 원소의 나열로 들어가야 하므로 배열의 경우는 spread operator(...)를 사용한다.
*/
