function solution(n) {
    return String(Math.sqrt(n)).length <= String(n).length ? (Math.sqrt(n)+1)*(Math.sqrt(n)+1) : -1;
}

// https://programmers.co.kr/learn/courses/30/lessons/12934
// 제곱근의 길이를 비교해 제곱근인 수 계산
