function solution(num) {
    let answer = 0;
    let n = Number(num);
    
    if(num===1)
        {
            return 0;
        }
    
    while(1)
        {
            if(num%2===0)
            {
                num=num/2;
            }
            else if(num%2===1)
            {
                num=1+(3*num);
            }
            
            answer++;
            
            if(answer===500)
                {
                    return -1;
                }
            
            if(num===1)
                {
                    return answer;
                }
        }
}

// https://programmers.co.kr/learn/courses/30/lessons/12943
// 반복문을 통한 계산