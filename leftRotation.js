function leftRot(a, d) {
  const n = a.length % d;
  const left =[...a].slice(n);
  const right = [...a].slice(0,n)
  return [...left,...right]
}
console.log(leftRot([1,2,3,4,5],3))