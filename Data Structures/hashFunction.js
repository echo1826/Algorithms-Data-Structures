// this hash works on strings only
function hash(str, arrLength) {
    let total = 0;
    for(let i = 0; i < str.length; i++) {
        let value = str.charCodeAt(i) - 96;
        total = (total + value) % arrLength;
    } 
    // This modulo operation makes sure total stays within the bounds of the array length
}
// refining our hash
// 1. Only hashes strings (we won't worry about this)
// 2. Not constant time - linear in key length
// 3. Could be a little more random