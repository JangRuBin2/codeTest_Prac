function test(a, b) {
  b.forEach(word=> {
    // 배열에서 특정 요소가 없으면 -1반환
    const c = a.indexOf(word);
    console.log(c)
  })
}
test([1, 2, 3, 4], [2, 4])