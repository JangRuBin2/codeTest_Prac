function leftRot(a, d) {
  const n = a.length % d;
  const array = [...a.slice(n),...a.slice(0,n)]
  return array
}
console.log(leftRot([1,2,3,4,5],3))