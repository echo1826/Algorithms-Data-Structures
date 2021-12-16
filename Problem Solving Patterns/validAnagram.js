function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
    for(let char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }
    for (let char in frequencyCounter1) {
        if(!(char in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[char] !== frequencyCounter1[char]) {
            return false;
        }
    }
    return true;
}

// SOLUTION
function validAnagram(first, second) {
    if(first.length !== second.length) {
        return false;
    }

    const lookup = {};
    for(let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for(let i = 0; i < second.length; i++) {
        let letter = second[i];
        if(!lookup[letter]) {
            return false;
        }else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

console.log(validAnagram("iceman", "cinema"));