// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in
// Can solve this using either Frequency Counter or Multiple Pointers
// variable number of arguments means to use the built-in argument object in javascript
// if using multiple pointers the array must be sorted first!

// Frequency Counter Approach
function areThereDuplicates() {
    let lookup = {};
    for (let i = 0; i < arguments.length; i++) {
        if (lookup[arguments[i]]) {
            return true;
        } else {
            lookup[arguments[i]] = 1;
        }
    }
    return false;
}

// Multiple Pointers Approach
// can't start at two ends of array, must do the pointers next to each other
// function areThereDuplicates() {
//     if(arguments.length === 0){
//         return false;
//     }
//     let left = 0;
//     let right = arguments.length - 1;
//     while(left < right) {
//         if(arguments[left] === arguments[right]) {
//             return true;
//         }else {
//             right--;
//         }
//     }
//     return false;
// }

// using pointers must sort the array first!
// function areThereDuplicates() {
//     let start = 0;
//     let next =  1;
//     while(next < arguments.length) {
//         if(arguments[start] === arguments[next]) {
//             return true
//         }
//         start++;
//         next++;
//     }
//     return false;
// }

// SOLUTION areThereDuplicates FREQUENCY COUNTER
function areThereDuplicates() {
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}

// SOLUTION areThereDuplicates MULTIPLE POINTERS
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

// SOLUTION areThereDuplicates One Liner Solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates('a', 'b', 'c'));