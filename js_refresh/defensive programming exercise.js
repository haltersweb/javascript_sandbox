// DEFENSIVE PROGRAMMING

// The length of the word parameter cannot be less than 2.
// The length of the match parameter must be 1.
// The type of both the word and the match parameters must be string.

function letterFinder(word, match) {
    const condition_word = typeof word == 'string' && word.length >= 2
    const condition_match = typeof match == 'string' && match.length == 1
    if (condition_word && condition_match) {
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log(`Found the ${match} at ${i}`)
            } else {
                console.log(`---No match found at ${i}`)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.")
    }
}

letterFinder('cat', 'c')
letterFinder('cat', 'ca')
letterFinder(['cat'], 'a')

function printWord(word) {
    const condition_word = typeof word == 'string' && word.length > 0
    if (condition_word) {
        console.log(word)
    } else {
        console.log('Please pass a legitimate word')
    }
}

printWord('hello')
printWord(['hello'])
printWord('')