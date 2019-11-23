new Promise((resolve, reject) => {
    setTimeout(() => resolve('a'), 1000)
})
.then(result => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve(result + 'b'), 1000)
    })
})
.then(result => {
    throw new Error(result); 
 })
.then(null, result => {
    throw result; 
})
.catch(result => {
    console.error(result);
})