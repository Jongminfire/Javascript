function solution(words, queries) {
    var answer = [];
    
    for(let j=0;j<queries.length;j++)
        {
            let count = 0;
            let wildcard = queries[j].match(/\?/g).length;              // '?' 개수 찾기
            let a = queries[j].substr(wildcard,(queries[j].length-wildcard));
            let a2 = queries[j].substr(0,(queries[j].length-wildcard));
            
            if(wildcard===queries[j].length)
                {
                    answer.push(words.length-1);
                    continue;
                }
            
            for(let i=0;i<words.length;i++)
                {
                    if(words[i].length!==queries[j].length)
                        {
                            continue;
                        }
                    
                    if(queries[j][0]==='?')
                        {
                            let b = words[i].substr(wildcard,(words[i].length-wildcard));
                            
                            if(a===b)
                                {
                                    count++;
                                }
                        }
                    else
                        {
                            let b = words[i].substr(0,(words[i].length-wildcard));
                            
                            if(a2===b)
                                {
                                    count++;
                                }
                        }
                }
            
            answer.push(count);
        }
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/60060
// substr을 이용해 queries와 words 배열 비교

// 정답은 맞으나 효율성 테스트에서 3/5 이므로 효율성 고려해서 다시 코딩해야 함.