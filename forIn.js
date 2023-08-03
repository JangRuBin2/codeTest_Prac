const test = {
  name : '루빈',
  age : '25',
  sex : 'man'
};
console.log(test);
for (key in test) {
  console.log(key, ':' , test[key]);
}