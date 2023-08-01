function minimumBribes(q) {
  // Write your code here
  const n = q.length;
  let bribes = 0;
  for (let i=0; i<n; i++) {
    //만약 q[i]요소가 원래 위치에 있어야 할 숫자보다 크다면 뇌물을 한번 줘서 2칸 뒤로 이동
    let temp = q[i];
    if(temp > i+1) {
      temp-2
      bribes++;
    }
  } if(bribes > 2) {
    console.log('Too Chaotic')
  }
  console.log(bribes);
}
minimumBribes([1,7,2,5,6,4])