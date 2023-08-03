function minimumBribes(q) {
  let swapCount = 0;
  const n = q.length;
  for(let i=0; i<n; i++) {
      const originalPos = q[i]-(i+1);
      console.log(originalPos)
      if(originalPos > 2) {
          return console.log("Too chaotic");
      };
  for(let j=Math.max(0, q[i]-2); j<i; j++) {
      if(q[j]>q[i]) {
          [[q[i], q[j]]] = [[q[j], q[i]]];
          swapCount++;
      } 
  }
  }   console.log(swapCount);
} 
minimumBribes([2, 1, 5, 3, 4]);