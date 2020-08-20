//function solution(answers) {
//    let answer = [];

//    const first = [1, 2, 3, 4, 5];
//    const second = [2, 1, 2, 3, 2, 4, 2, 5];
//    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//    let idx1 = 0;
//    let idx2 = 0;
//    let idx3 = 0;

//    let score1 = 0;
//    let score2 = 0;
//    let score3 = 0;

//    let max = 0;

//    for (let i = 0; i < answers.length; i++) {
//        if (answers[i] === first[idx1]) {
//            score1++;
//        }

//        if (answers[i] === second[idx2]) {
//            score2++;
//        }

//        if (answers[i] === third[idx3]) {
//            score3++;
//        }

//        idx1++;
//        idx2++;
//        idx3++;

//        if (idx1 === first.length) {
//            idx1 = 0;
//        }

//        if (idx2 === second.length) {
//            idx2 = 0;
//        }

//        if (idx3 === third.length) {
//            idx3 = 0;
//        }
//    }

//    max = Math.max(score1, score2, score3);

//    if (score1 === max) {
//        answer.push(1);
//    }

//    if (score2 === max) {
//        answer.push(2);
//    }

//    if (score3 === max) {
//        answer.push(3);
//    }

//    return answer;
//}

//// https://programmers.co.kr/learn/courses/30/lessons/42840
//// 저장된 배열과 일치하는 개수 세기