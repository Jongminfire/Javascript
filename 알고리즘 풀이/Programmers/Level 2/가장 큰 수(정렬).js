function solution(numbers) {
    numbers.sort((a,b)=>{
        return (String(b)+String(a))-(String(a)+String(b));         // 문자열 b+a 와 a+b 를 비교.
    })
    
    if(numbers[0]===0)                                              // 가장 큰 값이어야 하는 맨 앞 수가 0일 경우 답은 0이다. (000 대신 0을 출력해야 하므로)
        {
            return '0';
        }
    
    return numbers.join('');                                        // 배열 값 합치기
}

// https://programmers.co.kr/learn/courses/30/lessons/42746
// 가장 큰 조합의 수를 찾는 문제