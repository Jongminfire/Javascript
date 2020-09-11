let visit = new Array(201,0);

function dfs(computers,start,n){
    visit[start]=1;
    
    for(let i=0;i<n;i++){
        if(computers[start][i] && visit[i]!==1){
            dfs(computers,i,n);
        }
    }
}

function solution(n, computers) {
    var answer = 0;
    
    for(let i=0;i<computers.length;i++)
        {
            if(visit[i]!==1)
            {
                dfs(computers,i,n);
                answer++;
            }
        }
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript
// DFS로 연결요소 개수 출력