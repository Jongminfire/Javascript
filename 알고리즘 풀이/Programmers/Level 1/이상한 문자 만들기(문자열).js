function solution(s) {
    let answer = '';
    let arr = s.split(' ');

    for(let i=0;i<arr.length;i++){
        let str = "";
        
        for(let j=0;j<arr[i].length;j++){
            if(j%2===0){
                str+=arr[i][j].toUpperCase();
            }
            else{
                str+=arr[i][j].toLowerCase();
            }
        }
        
        answer+=str+" ";
    }
    
    return answer.substr(0,answer.length-1);
}

// https://programmers.co.kr/learn/courses/30/lessons/12930
// 단어의 대소문자 변환 문제