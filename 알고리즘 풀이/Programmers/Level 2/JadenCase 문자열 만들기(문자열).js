function solution(s) {
    let string = s.split(' ').map((v)=>{
        return v.charAt(0).toUpperCase()+v.slice(1).toLowerCase();  // 여기서 v.charAt(0) 대신 v[0]를 쓰면 런타임에러 발생했음
    }).join(' ');
    
    return string;
}

// https://programmers.co.kr/learn/courses/30/lessons/12951?language=javascript
// 단어의 맨 앞글자만 toUpperCase(), 나머지는 toLowerCase() 하는 문제