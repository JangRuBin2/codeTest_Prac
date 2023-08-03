const test = {
  name : '루빈',
  age : '25',
  sex : 'man'
};
console.log(test);
for (key in test) {
  console.log(key, ':' , test[key]);
};
const test2 = [1, 2, 3, 4];
test2.forEach(data => {
  console.log(data);
})