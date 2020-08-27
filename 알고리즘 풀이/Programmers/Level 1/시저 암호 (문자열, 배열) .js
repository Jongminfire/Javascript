function solution(s, n) {
    let i=0;
    let answer = s.split("").map((value)=>{
        let ascii = value.charCodeAt();
        
        if(ascii===' '.charCodeAt())
            {
                return value;
            }
        
        if(ascii>='a'.charCodeAt() && ascii<='z'.charCodeAt())
            {
                if(ascii+n>'z'.charCodeAt())
                    {
                        ascii-=26;
                    }
                
                return String.fromCharCode(ascii+n);
            }
        else if(ascii>='A'.charCodeAt() && ascii<='Z'.charCodeAt())
            {
                if(ascii+n>'Z'.charCodeAt())
                    {
                        ascii-=26;
                    }
                
                return String.fromCharCode(ascii+n);
            }
    });
    
    return answer.join('');
}

// https://programmers.co.kr/learn/courses/30/lessons/12926
// charCodeAt() 과 fromCharCode()를 활용한 문자열 처리