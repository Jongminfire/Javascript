//function solution(arr, divisor) {
//    var answer = [];

//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i] % divisor === 0) {
//            answer.push(arr[i]);
//        }
//    }

//    answer.sort(function (a, b) {           // 오름차순 정렬
//        return a - b;
//    });

//    if (answer.length === 0)
//        answer.push(-1);

//    return answer;
//}

//// https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript
//// 배열 오름차순 정렬을 활용한 문제