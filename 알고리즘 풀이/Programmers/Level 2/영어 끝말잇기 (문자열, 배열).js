function solution(n, words) {
    var answer = [];
    var index=-1;

    for(let i=0;i<words.length;i++)
        {
            let find=words.indexOf(words[i]);
            
            if(find<i)
            {
                index=i;
                break;
            }
            
            if(i!=words.length-1)
                {
                    if(words[i][words[i].length-1] !== words[i+1][0])
                    {
                        index=i+1;
                        break;
                    }
                }
            

        }

    if(index===-1)
        {
            answer.push(0);
            answer.push(0);
        }
    else
        {
            answer.push(index%n+1);
            answer.push(parseInt(index/n)+1);
        }
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12981
// 문자열의 맨 앞과 맨 뒤자리 비교와 indexOf를 활용한 중복검사