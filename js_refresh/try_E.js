try {
    let a = b  // ReferenceError
} catch(err) {
    console.log('\nerr.name:', err.name) // ReferenceError
    console.log('\nerr.message:', err.message) // b is not defined
    console.log('\nerr.stack:')
    console.log(err.stack) // stack trace
}