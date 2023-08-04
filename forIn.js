function checkMagazine(magazine, ransomNote) {
  const wordCount = new Map();

  // 매거진에 있는 단어들을 해시 맵에 저장 (단어와 등장 횟수)
  for (const word of magazine) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  }

  // ransom note의 단어들을 확인하여 매거진에 모두 포함되어 있는지 확인
  for (const word of ransomNote) {
    const count = wordCount.get(word);
    if (!count || count === 0) {
      console.log('No');
      return;
    }
    wordCount.set(word, count - 1);
  }

  console.log('Yes');
}

// 예시
const magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
const ransomNote = ['give', 'one', 'grand', 'today'];
checkMagazine(magazine, ransomNote); // 출력: Yes
