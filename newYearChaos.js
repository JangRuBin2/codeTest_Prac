function minimumBribes(q) {
  // Write your code here
  const n = q.length;
  let bribes = 0;
  for(let i=0; i<n; i++) {
      const originalPos = q[i]-1;
      const diff = originalPos - i;
      if(diff > 2) {
          console.log
          ("Too chaotic");
          return;
      }
      //j가 음수가 되지 않기위한 초기화 설정 값
      for(let j=Math.max(0, originalPos - 1); j<i; j++) {
          if(q[j]> q[i]) {
              bribes++;
          }
      }
  } console.log(bribes)
}
    


minimumBribes([1,3,2,5,6,4])