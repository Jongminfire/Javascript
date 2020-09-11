function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    let list=[];
    
    for(let i=0;i<cities.length;i++){
        let find = cache.indexOf(cities[i].toUpperCase());
        if(find===-1){
            answer+=5;
        }
        else{
            answer++;
            cache.splice(find,1);
            cache.push(cities[i].toUpperCase());        // 가장 최근에 사용한 것을 마지막에 삭제
            continue;
        }
        
        if(cacheSize>0){
            if(cache.length<cacheSize){
                cache.push(cities[i].toUpperCase());
            }
            else{
                cache.shift();
                cache.push(cities[i].toUpperCase());
            }
        }
    }

    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/17680
// LRU 알고리즘을 이용한 문자열 처리 문제