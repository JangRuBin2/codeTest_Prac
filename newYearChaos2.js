function minimumBribes(q) {
  const n = q.length;
  let swapCount = 0;

  for (let i = 0; i < n; i++) {
    const bribes = q[i] - (i + 1);
    console.log(`${bribes}bribes입니다`)
    if (bribes > 2) {
      console.log("Too chaotic");
      return;
    }

    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) {
        console.log(q[j], q[i])
        swapCount++;
      }
    }
  }

  console.log(swapCount);
}

// 예제 입력 테스트
const testCases = [
  [2, 1, 5, 3, 4]
];

for (const testCase of testCases) {
  minimumBribes(testCase);
}
