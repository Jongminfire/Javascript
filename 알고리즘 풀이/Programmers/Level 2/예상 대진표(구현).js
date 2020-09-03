function solution(n,a,b)
{
    let answer = 0;
    let level = 1;
    let a2 = (a-1);
    let b2 = (b-1);
    
    while(Math.pow(2,level)<n)
          {
            level++;
          }
    
    for(let i=0;i<level;i++)
        {
            a2=parseInt(a2/2);
            b2=parseInt(b2/2);
            
            if(a2===b2)
                {
                    return answer+1;   
                }
            
            answer++;
        }
    
    return level;
}

// https://programmers.co.kr/learn/courses/30/lessons/12985
// 2의 제곱 단계를 구하는 문제