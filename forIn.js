const mapTest = new Map();
const test = [1,2,2,2,2, 2, 3, 4];
const test2 = [1,2,4];
test.forEach(data => {
  mapTest.set(data,1)
})
for(const num of test2) {
  const getTest = mapTest.get(num);
  console.log(getTest);
}