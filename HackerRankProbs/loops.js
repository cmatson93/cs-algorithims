/* 
Take in a string and print each charachter in this order: 
    1. First print each vowel in the order they were in in the string. 
    2. Then do the same for constonants. 
*/
function vowelsAndConsonants(word) {
    let vowelsArray = [];
    let constsArray = [];
    for (let i=0; i<word.length; i++){
        switch (word[i]) {
            case 'a':
                vowelsArray.push(word[i]);
                break;
            case 'e':
                vowelsArray.push(word[i]);                
                break;
            case 'i':
                vowelsArray.push(word[i]);                
                break;
            case 'o':
                vowelsArray.push(word[i]);                
                break;
            case 'u':
                vowelsArray.push(word[i]);                
                break;
            default:
                constsArray.push(word[i]);
                break;
        }
    }
    var lettersArray = vowelsArray.concat(constsArray);
    lettersArray.forEach(letter => {
      console.log(letter);
    });
}

vowelsAndConsonants("javascript");