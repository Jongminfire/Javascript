function solution(n, lost, reserve) {
    var answer = 0;
    var arr = new Array(n);
    var sum = 0;

    for (let i = 0; i < n; i++) {
        arr[i] = 1;
    }

    // var arr = Array(n).fill(1); 로 대체 가능 (ES6 문법)

    /* lost reserve */

    for (let j = 0; j < lost.length; j++) {
        arr[lost[j] - 1]--;
    }

    for (let r = 0; r < reserve.length; r++) {
        arr[reserve[r] - 1]++;
    }

    /*

    lost.forEach(number => students[number]-=1);
    reserve.forEach(number => students[number]+=1);

    // 로 표현 가능하다.

    */

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            if (i > 0) {
                if (arr[i - 1] === 2) {
                    arr[i - 1] = 1;
                    arr[i] = 1;
                    continue;
                }
                else if (arr[i + 1] === 2) {
                    arr[i + 1] = 1;
                    arr[i] = 1;
                }
            }
            else if (i === 0) {
                if (arr[i + 1] === 2) {
                    arr[i + 1] = 1;
                    arr[i] = 1;
                }
            }
            else if (i === n - 1) {
                if (arr[i - 1] === 2) {
                    arr[i - 1] = 1;
                    arr[i] = 1;
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            sum++;
        }
    }

    if (sum >= n) {
        sum = n;
    }

    return sum;
}

// https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript
// 완전탐색을 활용한 탐욕법 문제

// * 하드코딩이므로 다른 사람 풀이 참고해서 보완해야 할 것 같다.