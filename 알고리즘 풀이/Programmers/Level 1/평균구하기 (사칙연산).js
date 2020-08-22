function solution(arr) {
    var answer = 0;
    
    arr.forEach(value => answer+=value)
    
    return answer/arr.length;
}

// https://programmers.co.kr/learn/courses/30/lessons/12944
// 배열 요소의 평균 구하기