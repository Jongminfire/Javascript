function solution(strings, n) {
    let answer = strings.sort((a,b)=>{
        
        if(a[n]===b[n])
            {
                return (a>b)-(b>a);         // true:1 , false:0으로 a>b이면 1 a=b이면 0 a<b이면 -1
            }
        else
            {
                return (a[n]>b[n])-(b[n]>a[n]);
            }
    });
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript
// sort 메소드를 이용한 정렬