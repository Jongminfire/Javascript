function solution(arr1, arr2) {
    var answer = [[]];
    
    for(let i=0;i<arr1.length;i++)
        {
            let arr=[];
            
            for(let j=0;j<arr2[0].length;j++)
                {
                    let value = arr1[i].reduce((acc,cur,idx)=>{         // reduce 메소드를 활용해 누적값을 계산했다.
                        return acc+cur*arr2[idx][j];
                    },0)
                    
                    arr.push(value);
                }
            
            answer.push(arr);
        }
    
    answer.shift();
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12949
// 반복문을 활용해 행렬의 곱을 구하는 문제