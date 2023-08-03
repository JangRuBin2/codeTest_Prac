function test(a) {
  const c = {};
  for(const word in a) {
    c[a]++;
    };
  console.log(c);
}
test([1,'2',3]);
