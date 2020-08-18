function solution(array, commands) {
    var answer = [];

    for (let i = 0; i < commands.length; i++) {
        var slice = [];

        for (let j = commands[i][0] - 1; j <= commands[i][1] - 1; j++) {
            slice.push(array[j]);
        }

        slice.sort((a, b) => { return a - b; });        // slice.sort(); 하면 케이스 통과 안되는 경우가 있음
        answer.push(slice[commands[i][2] - 1]);
    }

    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
// 배열 자른후 정렬