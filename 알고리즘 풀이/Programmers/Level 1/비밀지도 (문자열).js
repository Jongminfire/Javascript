function solution(n, arr1, arr2) {
    let answer = [];
    
    for(let i=0;i<n;i++)
        {
            let binary1 = arr1[i].toString(2);      // toString(2)로 2진수로 변환
            let binary2 = arr2[i].toString(2);
            let empty1 = "";
            let empty2 = "";
            
            for(let e=0;e<n-binary1.length;e++)
                {
                    empty1+='0';        
                }
            
            for(let e=0;e<n-binary2.length;e++)
                {
                    empty2+='0';        
                }
            
            binary1=empty1+binary1;
            binary2=empty2+binary2;
            
            let str = "";
            
            for(let j=0;j<n;j++)
                {
                    if(binary1[j]==='1' || binary2[j]==='1')
                        {
                            str+="#";
                        }
                    else
                        {
                            str+=" ";
                        }
                }
            
            answer.push(str);
        }
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/17681
// 십진수를 이진수에서 문자열로 변환 시키는 문제