function solution(N, stages) {
    let answer = [];
    let max = 0;
    let arr = [];
    
    stages.sort((a,b)=>{
        max=Math.max(a,b,max);
        return a-b;
    })
    
    for(let i=1;i<=N;i++){
        let a = 0;
        let b = 0;
        
        for(let j=0;j<stages.length;j++){
            if(stages[j]>=i){
                b++;
            }
            if(stages[j]===i){
                a++;
            }
        }
        
        answer.push([a/b,i]);
    }
    
    answer.sort((a,b)=>{
        return b[0]-a[0];
    })
    
    for(let i=0;i<answer.length;i++)
        {
            arr.push(answer[i][1]);    
        }
    
    return arr;
}

// https://programmers.co.kr/learn/courses/30/lessons/42889
// 실패율 값을 배열로 넣은 뒤 내림차순 후 스테이지 값으로 출력