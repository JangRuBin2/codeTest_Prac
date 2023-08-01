function minimumSwaps(arr) {
  const n = arr.length;
  let swapCount = 0;
  
  for (let i = 0; i < n; i++) {
    while (arr[i] !== i + 1) {
      const temp = arr[i];
      const currentIndex = arr[i] - 1;
      [arr[i], arr[currentIndex]] = [arr[currentIndex], temp];
      swapCount++;
    }
  }

  return swapCount;
}

console.log(minimumSwaps([4, 3, 1, 2])); // Output: 3
