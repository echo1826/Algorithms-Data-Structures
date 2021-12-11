// Write a function to merge 2 sorted arrays
function merge(arr, arr2) {
    let i = 0;
    let j = 0;
    let results = [];
    while (i < arr.length || j < arr2.length) {
        if (arr[i] < arr2[j]) {
            results.push(arr[i]);
            i++;
        } else {
            results.push(arr[j]);
            j++;
        }
    }
    while (i < arr.length) {
        results.push(arr[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr[j]);
        j++;
    }
    return results;
}