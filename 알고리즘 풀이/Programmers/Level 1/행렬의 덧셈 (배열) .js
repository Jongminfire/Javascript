function solution(arr1, arr2) {
    var answer=[[]];
    
    for(let i=0;i<arr1.length;i++)
        {
            var arr = [];
            
            for(let j=0;j<arr1[i].length;j++)
                {
                    arr.push(arr1[i][j]+arr2[i][j]);
                }
            
            answer.push(arr);
        }
    
    answer.shift();             // 맨 앞에 빈 배열이 남아있어서 맨 앞의 빈 배열 제거 해줌
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12950
// 배열을 활용한 행렬의 덧셈 계산