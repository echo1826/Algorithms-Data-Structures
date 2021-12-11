// get single digit helper for radix sort
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// get the digit count of the given number
function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// get the highest digit count of the entire array of numbers given
function mostDigits(nums) {
    let maxDigit = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(nums[i]));
    }
    return maxDigit;
}

function radixSort(nums) {
    let maxDigit = mostDigits(nums);
    for(let i = 0; i < maxDigit; i++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j], i);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}