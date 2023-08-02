// function minimumSwaps(arr) {
//   const n = arr.length;
//   let swapCount = 0;
  
//   for (let i = 0; i < n; i++) {
//     while (arr[i] !== i + 1) {
//       const temp = arr[i]; //4
//       const currentIndex = arr[i] - 1; 3
//       [arr[i], arr[currentIndex]] = [arr[currentIndex], temp];
//       swapCount++;
//     }
//   }

//   return swapCount;
// }

// console.log(minimumSwaps([4, 3, 1, 2])); // Output: 3
const test = [3,1,2,4];
let c = test[0];
let b = test[0]-1;
[test[0], test[b]] = [test[b], c];
console.log(test)