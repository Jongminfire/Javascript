function solution(skill, skill_trees) {
    let answer = 0;
    
    for(let i=0;i<skill_trees.length;i++)
        {
            let copy = skill;
            let bool = false;
            let min = -2;
            
            for(let j=0;j<skill.length;j++)
                {
                    let check = skill_trees[i].indexOf(skill[j]);
                    
                    if(check===-1)
                        {
                            min=check;
                        }
                    else if(min<check)
                        {
                            if(min===-1)
                                {
                                    bool = true;
                                    break;
                                }
                            min=check;
                        }
                    else if(check<min && check!==-1)
                        {
                            bool = true;
                            break;
                        }
                }
            
            if(bool===false)
                {
                    answer++;
                }
        }
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/49993
// 문자열 검사를 통한 순서확인