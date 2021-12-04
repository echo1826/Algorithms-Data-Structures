// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters

function findLongestSubstring(str) {
    let start = 0;
    let length = 0;
    let lookup = {};
    
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        // if the character has been seen, start will be the highest number as opposed to the current value of lookup.char
        if(lookup[char]) {
            start = Math.max(start, lookup[char]);
        }
        length = Math.max(length, i - start + 1);
        lookup[char] = i + 1;
        console.log(lookup);
    }
    return length;
}

console.log(findLongestSubstring("rithmschool"));