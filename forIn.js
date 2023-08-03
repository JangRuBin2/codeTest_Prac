function test(a, b) {
  const c = {};
  for(const word in a) {
    c[a]++;
    };
  for(const word in b) {
    c[b]++;
  }
  console.log(c);
}
test([1,'2',3], ['안','녕','??']);

