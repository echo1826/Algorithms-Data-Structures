// merge function
function merge(arr, arr2) {
    let i = 0;
    let j = 0;
    let results = [];
    while (i < arr.length && j < arr2.length) {
        if (arr[i] < arr2[j]) {
            results.push(arr[i]);
            i++;
        } else if(arr2[j] < arr[i]){
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr.length) {
        results.push(arr[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let firstHalfArr = mergeSort(arr.slice(0, middle));
    let secondHalfArr = mergeSort(arr.slice(middle));
    return merge(firstHalfArr, secondHalfArr);
}


