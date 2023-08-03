function test(a, b, d) {
  const c = {};
  //forEach, for of, for in 모두 같은 결과 출력
  a.forEach(data=> {
    c[a]++;
  })
  for(const word of b) {
    c[b]++;
  }
  for(const word in d) {
    c[d]++;
  }
  console.log(c);
}
test([1,'2',3], ['안','녕','??'], ['a', 'b', 'c']);

