function solution(n) {
    var answer = 0;
    var dp = [];

    dp[0] = 1;
    dp[1] = 2;

    if (n >= 2) {
        for (let i = 2; i < n; i++) {
            dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
        }
    }

    answer = dp[n - 1];

    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12900?language=javascript
// 1과 2를 조합해서 합이 n인 개수를 구하는 문제