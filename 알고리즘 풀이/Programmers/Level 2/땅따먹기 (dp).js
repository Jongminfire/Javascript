//function solution(land) {
//    var answer = 0;
//    var dp = new Array(land.length);

//    for (var j = 0; j < land.length; j++) {
//        dp[j] = new Array(4);
//    }

//    dp[0][0] = land[0][0];
//    dp[0][1] = land[0][1];
//    dp[0][2] = land[0][2];
//    dp[0][3] = land[0][3];

//    for (var i = 1; i < land.length; i++) {
//        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]) + land[i][0];
//        dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]) + land[i][1];
//        dp[i][2] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]) + land[i][2];
//        dp[i][3] = Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][0]) + land[i][3];
//    }

//    answer = Math.max(dp[land.length - 1][0], dp[land.length - 1][1], dp[land.length - 1][2], dp[land.length - 1][3]);

//    return answer;
//}

//// https://programmers.co.kr/learn/courses/30/lessons/12913
//// 2차원 배열을 활용한 dp문제