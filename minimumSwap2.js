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
// 변수에 n번째 index 값을 할당 -> 원본 데이터 값 보존
let c = test[0];
// n번째 index에서 1을 뺀 값을 찾음 -> 1~n까지 1씩 증가하는 정수의 집합 배열이기 때문
let b = test[0]-1;
// 기존 배열 데이터에 두가지 데이터를 바꿔줌
[test[0], test[b]] = [test[b], c];
// [2, 1, 3, 4]
console.log(test)