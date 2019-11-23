try {
    for(let i = 1; ; i++) {
        if (i > 10) {
            throw new Error('Ten is enough'); 
        }
        console.log(i);
    }
} catch(error) {
    console.error(error);
} finally {
    console.log('operation complete')
}