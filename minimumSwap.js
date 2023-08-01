function minimumSwaps(arr) {
  const n = arr.length;
  let swapCount = 0;
  const centerIndex = Math.floor(n/2);
  const centerNum = arr[centerIndex];
  const leftNum = [...arr.slice(0, centerNum)];
  return leftNum;
  }
  console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]))