function minimumSwaps(arr) {
  const n = arr.length;
  let swapCount = 0;

  for (let i = 0; i < n - 1; i++) {
    while (arr[i] !== i + 1) {
      const temp = arr[i];
      arr[i] = arr[temp - 1];
      arr[temp - 1] = temp;
      swapCount++;
    }
  }

  return swapCount;
}

// 예시 배열을 사용하여 함수를 테스트합니다.
const arr = [7, 1, 3, 2, 4, 5, 6];
console.log(minimumSwaps(arr)); // 출력 결과: 5 (최소 스왑 횟수)
