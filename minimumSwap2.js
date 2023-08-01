function minimumSwap(arr) {
  let swapCount = 0;
  for(let i=0; i<arr.length-1; i++) {
    while(arr[i]!== i+1) { //4는 당연히 1이 아니다
      const temp = arr[i]; // temp를 index[0] = 4로 초기화
      const currentIndex = arr[i]-1 // 4-1 = 3
      arr[i] = arr[currentIndex]; //배열[3]의 값을 가진 것을 배열[4]와 교체
      arr[currentIndex] = temp; //배열[4]값을 배열[3]와 교체
      // [4,3,1,2] -> [3,4,1,2]-> [3,2,1,4], [1,2,3,4]
      swapCount++; //스왑 횟수 증가
    }
  } return swapCount;
}
console.log(minimumSwap([4,3,1,2]))