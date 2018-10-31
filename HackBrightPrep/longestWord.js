function LongestWord(sen) {
    var longestWord = "";
    // code goes here  
    var words = sen.split(/[^A-Za-z]/);
    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    })
    return longestWord;
}

// keep this function call here 
console.log(LongestWord("Hello world"));


