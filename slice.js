const testArray = [1, 2, 3, 4, 5];
const subArray1 = testArray.slice(1,-1);
function rotLeft(a, d) {
  // Write your code here
const n = d % a.length;
const circularArray = [...a.slice(n), ...a.slice(0,n)];
return circularArray

}
console.log(rotLeft([1,2,3,4,5], 2))