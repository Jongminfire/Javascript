function solution(a, b) {
    let answer=b;
    let day =[0,31,29,31,30,31,30,31,31,30,31,30,31];
    
    for(let i=0;i<a;i++)
        {
            answer+=day[i];
        }
    
    switch(answer%7){
        case 3:
            return 'SUN';
            break;
        case 4:
            return 'MON';
            break;
        case 5:
            return 'TUE';
            break;
        case 6:
            return 'WED';
            break;
        case 0:
            return 'THU';
            break;
        case 1:
            return 'FRI';
            break;
        case 2:
            return 'SAT';
            break;
    }
}

// https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript
// 2016년의 월과 일을 통해서 요일을 계산하는 문제