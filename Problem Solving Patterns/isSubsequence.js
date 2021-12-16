// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// function will take in 2 strings
// it will do a comparison to make sure one string is a substring of the other

function isSubsequence(str1, str2) {
    let first = 0;
    let next = 0;
    if (!str1) {
        return true;
    }
    while (next < str2.length) {
        if (str2[next] === str1[first]) {
            first++;
        }
        if (first === str1.length) {
            return true;
        }
        next++;
    }
    return false;
}

// SOLUTION
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

// SOLUTION RECURSION
function isSubsequence(str1, str2) {
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}