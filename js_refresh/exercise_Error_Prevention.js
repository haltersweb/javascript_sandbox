function addTwoNumbers(a, b) {
    try {
        if (typeof a != 'number') {
            throw new TypeError('The first argument is not a number.')
        } else if (typeof b != 'number') {
            throw new TypeError('The second argument is not a number.')
        } else {
             return `\nThe sum is: ${a + b}`
        }
    } catch(err) {
        return `\nERROR:\n${err.stack}`
    }
}

console.log(addTwoNumbers(5, 5))
console.log(addTwoNumbers(5, '5'))
console.log(addTwoNumbers('5', 5))