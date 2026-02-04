function getAscii(char) {
    if (char.length !== 1) {
        return -1; 
    }
    return char.charCodeAt(0);
}

console.log(getAscii("T"));    