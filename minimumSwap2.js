function minimumSwap(arr) {
  let swapCount = 0;
  for(let i=0; i<arr.length-1; i++) {
    while(arr[i]!== i+1) {
      const temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
      swapCount++;
    }
  } return swapCount;
}
console.log(minimumSwap([4,3,1,2]))