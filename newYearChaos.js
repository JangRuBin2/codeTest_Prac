function minimumBribes(q) {
  // Write your code here
  const n = q.length;
  let bribes = 0;
  for (let i=0; i<n; i++) {
    //만약 배열의 i번째 index가 원래 있어야 할 숫자가 아니라면
    while (q[i] === i+1) {
      bribes++;
      if(bribes > 2) {
        console.log('Too Chaotic');
        return;
      }
    }
    
  };
}
minimumBribes([1,7,2,5,6,4])