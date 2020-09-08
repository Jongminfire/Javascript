function solution(dartResult) {
    let answer = [];
    let point = [];
    let test =[];
    
    for(let i=0;i<2;i++){
        let value = "";
        
        for(let j=2;j<dartResult.length;j++){
            if(dartResult[j]>=0 || dartResult[j]<=9){
                if(dartResult[j-1]===1 && dartResult[j]===0){
                    continue;
                }
                value+=dartResult.substr(0,j);
                dartResult=dartResult.substr(j,dartResult.length-j);
                break;
            }
        }
        
        answer.push(value);
    }

    answer.push(dartResult);
    
    for(let i=0;i<answer.length;i++){
        let num = 0;
        
        if(answer[i][1]==='0'){
            num=10;
        }
        else{
            num=answer[i][0]
        }
        
        if(answer[i].indexOf('D')!==-1){
            num=Math.pow(num,2);
        }
        else if(answer[i].indexOf('T')!==-1){
            num=Math.pow(num,3);
        }
        
        if(answer[i].indexOf('#')!==-1){
            num*=-1;         
        }
        
        if(answer[i].indexOf('*')!==-1){
            num*=2;
            
            if(i!==0){
                point[point.length-1]*=2;
            }
        }
        
        point.push(Number(num));
        
    }
    
    return point.reduce((acc,cur)=>{
        return acc+cur;
    });
}

// https://programmers.co.kr/learn/courses/30/lessons/17682
// 문자열처리로 점수 계산하는 문제