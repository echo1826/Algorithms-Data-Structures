// pivot helper function for quick sort
function pivotHelper(arr, start = 0, end = arr.length - 1) {
    let pivotElement = arr[start];
    let swapIndex = start;
    const swap = (arr, idx1, idx2) => {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
      };
    for (let i = start + 1; i < arr.length; i++) {
        if(arr[i] < pivotElement) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left side
        quickSort(arr, left, pivotIndex - 1);
        // right side
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}