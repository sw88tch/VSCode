function maxWord(str) {
    var words = str.split(' ');
    var biggestWord = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > biggestWord) {
            biggestWord = words[i].length;
        }
    }
    return biggestWord;
}

// maxWord('My favorite day is Friday');
console.log(maxWord('My favorite day is Friday'))