function isJsonString(str) {
    try {
        let jj = typeof JSON.parse(str)
        return (jj === 'object');
    } catch (e) {
        return "Not an object";
    }
    
}

console.log(isJsonString('{"milad": "zand"}'));