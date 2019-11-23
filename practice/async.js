function timeoutA(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x), 1000);
    })
}

let asyncVersion = async () => {
    try {
    const a = await timeoutA(`a`);
    const ab = await timeoutA(`${a}b`);
    throw new Error(ab);        
    } catch(err) {
        console.error(err)
    }
}
asyncVersion();