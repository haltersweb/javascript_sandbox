try {
    throw new SyntaxError() // manually throws a SyntaxError into catch
    console.log(a + b)  // this code never run, ReferenceError never thrown
} catch(error) {
    console.log('\nYUP! There was an error')
    console.log('and here is the error object:\n')
    console.log(error) // This shows the Syntax Error manually thrown
    console.log('\nWAIT! This throws a SyntaxError()!!!')
}
console.log('\nThe program continues and this line IS executed')