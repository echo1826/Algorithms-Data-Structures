// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// assume the array is sorted?
// empty arrays return false
// if the average matches the target val return true

function averagePair(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if ((arr[start] + arr[end]) / 2 === val) {
            return true;
        } else if ((arr[start] + arr[end]) / 2 < val) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}

// SOLUTION
function averagePair(arr, num) {
    let start = 0
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2
        if (avg === num) return true;
        else if (avg < num) start++
        else end--
    }
    return false;
}