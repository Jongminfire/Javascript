//function solution(d, budget) {
//    var answer = 0;

//    d.sort(function (a, b) {    // d.sort() 가 정렬이 안되는 이유는 ASCII 값 기준으로 정렬하기 때문.
//        return a - b;           // 오름차순은 return a-b; 내림차순은 return b-a;
//    });

//    for (let i = 0; i < d.length; i++) {
//        if (budget >= d[i]) {
//            budget -= d[i];
//            answer++;
//        }
//    }

//    return answer;
//}

//// https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript
//// 오름차순으로 정렬 후 개수 세는 문제