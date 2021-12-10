function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    
    while(left < right) {
        let middle = Math.floor((left + right)/2);
        if(val === arr[middle]) {
            return middle;
        }else if(val < arr[middle]) {
            right = middle - 1;
        }else if(val > arr[middle]) {
            left = middle + 1;
        }
    }
    return -1;
}

// solution
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== val && start <= end) {
        if(val < arr[middle]) {
            end = middle -1;
        }else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle === val]) {
        return middle;
    }else {
        return -1;
    }
}