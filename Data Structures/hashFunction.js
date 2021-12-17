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
// 2. Not constant time - linear in str length
// 3. Could be a little more random

// refined hash function
function hash(str, arrLength) {
    let total = 0;
    // using a prime number reduces collisions, data is spread more evenly using prime numbers as part of the hash operation
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(str.length, 100); i++) {
        let char = str[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrLength;
    }
    return total;
}