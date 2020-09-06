function solution(record) {
    var answer = [];
    var arr = [];           // arr = record.map((v)=>v.split(' ')); 로 한번에 처리 할 수 있음
    var member = {};

    for(let i=0;i<record.length;i++){
        arr.push(record[i].split(' '));
        if(arr[arr.length-1].length===3){
            member[arr[arr.length-1][1]]=arr[arr.length-1][2];      // member[uid] = 닉네임 {uid1234:'Prodo',uid5678:'Ryan'} 식으로 저장되어 있음
        }
    }
    
    for(let i=0;i<arr.length;i++){
        let command = arr[i][0];
        
        if(command !== 'Change'){
            if(command === 'Enter'){
                answer.push(member[arr[i][1]]+'님이 들어왔습니다.');
            }
            else if(command === 'Leave'){
                answer.push(member[arr[i][1]]+'님이 나갔습니다.');
            }
        }
    }
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42888
// 문자열 처리 이후 obj에 넣은 닉네임 값 출력