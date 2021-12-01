// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
// A subarray must consist of consecutive elements from the original array. In ([100, 200, 300, 400], 2), [100, 200, 300] is a subaray of the original array, but [100, 300] is not.

function maxSubarraySum(arr, val) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < val) {
        return null;
    }
    for(let i = 0; i < val; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = val; i < arr.length; i++) {
        tempSum = tempSum - arr[i - val] + arr[i];
        if(tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}