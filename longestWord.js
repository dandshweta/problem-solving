function longestWord(str) {
  let words = str.split(" ");
  let wordBigLength = 0;
  let longestWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > wordBigLength) {
      wordBigLength = words[i].length;
      longestWords = [words[i]];
    }
  }

  console.log(longestWords);
}

longestWord("My name is ankit jain & i'm from morena");
