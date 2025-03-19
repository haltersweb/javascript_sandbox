try {
    // code you think will throw an error
    console.log(a + b)  // this will throw a ReferenceError
} catch(error) {
    console.log('\nYUP! There was an error')
    console.log('and here is the error object:\n')
    console.log(error) // ReferenceError
}
console.log('\nThe program continues and this line IS executed')