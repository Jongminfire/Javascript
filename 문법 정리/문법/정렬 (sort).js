const arr = [1, 6, 2, 5, 3, 4];

console.log(arr.sort()); // [1, 2, 3, 4, 5, 6]

/* 
Javascript에서는 sort 함수를 통해 정렬 할 수 있다.
compareFunction이 없을 경우 오름차순으로 정렬된다.
*/

console.log(arr.sort((a, b) => b - a)); // [6, 5, 4, 3, 2, 1]

/*
compareFunction을 이용해서 b-a 값으로 내림차순 정렬도 가능하다
*/

const arr2 = ["a", "aab", "ab", "aaac"];

console.log(arr2.sort()); // ['a', 'aaac', 'aab', 'ab']

console.log(
	arr2.sort((a, b) => {
		if (a < b) return 1;
		if (a > b) return -1;
		if (a === b) return 0;
	})
);

/*
문자열을 정렬 할 때도 마찬가지로 compareFunction을 사용하지 않으면 오름차순으로 정렬한다.

내림차순으로 정렬 할 때에는 a와 b의 대소비교와 같은 요소를 검사하는 compareFunction을 통해 정렬한다.
*/
