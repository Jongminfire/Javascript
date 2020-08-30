function solution(board, moves) {
    let answer = 0;
    let arr = new Array(board.length);
    let result = new Array(board.length);

    for (let i = 0; i < board.length; i++) {
        arr[i] = new Array(board.length);

        for (let j = board.length - 1; j >= 0; j--) {
            if (board[j][i] !== 0) {
                arr[i].push(board[j][i]);
            }
        }
    }

    for (let m = 0; m < moves.length; m++) {
        let now = arr[moves[m] - 1].pop();

        if (now && result.length !== 0) {
            if (now === result[result.length - 1]) {
                result.pop();
                answer += 2;
            }
            else {
                result.push(now);
            }
        }
    }

    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
// 2차원 배열과 pop 활용