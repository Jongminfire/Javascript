function solution(priorities, location) {
    const answer = priorities[location];
    let arr=[];
    let copy = priorities.slice().sort((a,b)=>{
        return a-b;
    });;
    let count = 0;
    let max = copy[copy.length-1];

    priorities[location]=-1;
    
    while(copy.length!==0){
        arr.push(priorities.slice());
        
        if(priorities[0]<copy[copy.length-1])
            {                
                if(priorities[0]===-1 && copy[copy.length-1]===answer)
                    {
                        return count+1;
                    }
                
                priorities.push(priorities.shift());
            }
        else
            {
                priorities.shift();
                copy.pop();
                count++;
            }
    }
    
    return count;
}

// https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
// location에 해당되는 값을 -1로 두고 몇번째에 빠지는지 확인