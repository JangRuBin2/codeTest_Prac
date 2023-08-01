function minimumSwaps(arr) {
  const n = arr.length;
  let swapCount = 0;
  const centerIndex = Math.floor(n/2);
  const centerNum = arr[centerIndex];
  const leftNum = [...arr.slice(0, centerNum+1)];
  let nowIndex = 1;
  let nowArray = arr;
  for(let i=0; i<leftNum.length; i++) {
    if(leftNum[i] > centerNum) {
      swapCount++;
      nowArray = [centerNum, ...leftNum.slice(1), arr[0],...arr.slice(-centerIndex)];
    } for(let j=0; j<nowArray.length; j++) {
      if(nowArray[j]> nowArray[j+nowIndex]) {
        //재할당
        [nowArray[j],nowArray[nowIndex]] = [nowArray[nowIndex], nowArray[j]];
        swapCount++;
        
      } else if(nowArray[j]< nowArray[j+nowIndex]) {
        return nowArray;
      }
    }
  };
  return nowArray
  }
  console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]))