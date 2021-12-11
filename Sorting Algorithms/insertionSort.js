function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        // start at the end of array to compare because you want to move the bigger value up rather than the value you're holding onto
        // second condition is added in the for loop to end the loop when you find the correct position in the array to insert the value that's being held onto
        for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
            // continue to move the values up by one position until this loop hits one of those conditions
            arr[j + 1] = arr[j];
        }
        // after the inner loop is finished that means you've found the correct position to store currentValue
        // console.log(arr[j+1]);
        arr[j + 1] = currentValue;
    }
    return arr;
}

insertionSort([2, 1, 4, 3, 7, 5, 6]);

function insertionSort(arr) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));