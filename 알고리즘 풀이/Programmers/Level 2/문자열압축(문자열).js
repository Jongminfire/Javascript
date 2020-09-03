function solution(s) {
    let answer = 0;
    let min=s.length;
    let count = 1;
    
    for(let i=1;i<=s.length/2;i++)
        {
            let str = s.substr(0,i);
            let len = s.length;
            
            for(let j=i;j<s.length+1;j+=i)  // 여기서 s.length+1 까지 범위를 잡아야 27번 테스트케이스를 통과하는데 왜인지는 모르겠음
                {
                    if(str===s.substr(j,i))
                        {
                            count++;
                            len-=i;
                        }
                    
                    else{
                         if(count!==1)
                            {
                                len+=String(count).length;      //count가 10,100 처럼 자리수가 바뀔 경우가 있으므로 length로 계산
                            }
                        
                        str = s.substr(j,i);
                        count=1;
                    }
                }
            
            if(count!==1)
                {
                    len+=String(count).length;
                }
            
            min=Math.min(min,len);
        }
    
    return min;
}

// https://programmers.co.kr/learn/courses/30/lessons/60057
// substr로 문자열 압축 최소길이 계산