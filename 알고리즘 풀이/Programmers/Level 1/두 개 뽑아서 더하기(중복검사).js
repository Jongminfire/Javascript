function solution(numbers) {
    let arr = numbers.slice();
    let answer = [];

    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(i!==j){
                let sum = arr[i]+arr[j];
                
                if(answer.indexOf(sum)===-1){
                    answer.push(sum);
                }
            }
        }
    }
    
    return answer.sort((a,b)=>{return a-b;});
}

// https://programmers.co.kr/learn/courses/30/lessons/68644
// 배열의 중복요소 제외하고 반복문으로 처리