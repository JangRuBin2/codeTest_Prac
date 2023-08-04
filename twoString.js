function twoString(s1, s2) {
  let result = false;
  for(const word of s1) {
    if(s2.includes(word)) {
      result = true;
    }}
  return result;
  }
// test1
console.log(twoString('Hello', 'Hello'));
// test2 둘다 true 반환 확인
console.log(twoString('hllo', 'Hello'));
// test3 false 반환
console.log(twoString('abc','ddd'));