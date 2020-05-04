const array = [5, 6, 1, 7, 5, 3, 6, 8];
const isSortMinToMax = true;
//const isSortMinToMax = false;

//const sortedArray = bubbleSort(array, isSortMinToMax);
//const sortedArray = selectionSort(array, isSortMinToMax);
//const sortedArray = insertionSort(array, isSortMinToMax);
const sortedArray = quickSort(array, 0, array.length - 1, isSortMinToMax);

console.log(sortedArray);


function bubbleSort(array, isSortMinToMax) {
    if (isSortMinToMax) {
        for(let i = 1; i < array.length; i++) {
            for(let j = 0; j < array.length; j++) {
                if (array[i] < array[j]) {
                    swapElements(array, i, j);
                }
            }
        }
    } else {  
        for(let i = 1; i < array.length; i++) {
            for(let j = 0; j < array.length; j++) {
                if (array[i] > array[j]) {
                    swapElements(array, i, j);
                }
            }
        }
    }        
    return array;
}

function selectionSort(array, isSortMinToMax) {
    if (isSortMinToMax) {
        for(let i = 0; i < array.length; i++) {
            let minIndex = i;
            for(let j = i; j < array.length; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            swapElements(array, i, minIndex);
        }
    } else {  
        for(let i = 0; i < array.length; i++) {
            let maxIndex = i;
            for(let j = i; j < array.length; j++) {
                if (array[j] > array[maxIndex]) {
                    maxIndex = j;
                }
            }
            swapElements(array, i, maxIndex);
        }
    }        
    return array;
}

function insertionSort(array, isSortMinToMax) {
    if (isSortMinToMax) {
        for(let i = 0; i < array.length; i++) {
            let value = array[i];
            let j = i - 1;
            for(; j >= 0; j--) {
                if (value < array[j]) {
                    array[j + 1] = array[j];
                } else {
                    break;
                }
            }
            array[j + 1] = value;
        }
    } else {  
        for(let i = 0; i < array.length; i++) {
            let value = array[i];
            let j = i - 1;
            for(; j >= 0; j--) {
                if (value > array[j]) {
                    array[j + 1] = array[j];
                } else {
                    break;
                }
            }
            array[j + 1] = value;
        }
    }        
    return array;
}

function quickSort(array, leftBorder, rightBorder, isSortMinToMax) {
    let leftMarker = leftBorder;
    let rightMarker = rightBorder;
    let pivot = array[Math.floor((leftMarker + rightMarker) / 2)];
    if (isSortMinToMax) {
        do {
            while (array[leftMarker] < pivot) {
                leftMarker++;
            }
            while (array[rightMarker] > pivot) {
                rightMarker--;
            }
            if (leftMarker <= rightMarker) {
                if (leftMarker < rightMarker) {
                    let tmp = array[leftMarker];
                    array[leftMarker] = array[rightMarker];
                    array[rightMarker] = tmp;
                }
                leftMarker++;
                rightMarker--;
            }
        } while (leftMarker <= rightMarker);

        if (leftMarker < rightBorder) {
            quickSort(array, leftMarker, rightBorder, isSortMinToMax);
        }
        if (leftBorder < rightMarker) {
            quickSort(array, leftBorder, rightMarker, isSortMinToMax);
        }
    } else {  
        do {
            while (array[leftMarker] > pivot) {
                leftMarker++;
            }
            while (array[rightMarker] < pivot) {
                rightMarker--;
            }
            if (leftMarker <= rightMarker) {
                if (leftMarker < rightMarker) {
                    let tmp = array[leftMarker];
                    array[leftMarker] = array[rightMarker];
                    array[rightMarker] = tmp;
                }
                leftMarker++;
                rightMarker--;
            }
        } while (leftMarker <= rightMarker);

        if (leftMarker < rightBorder) {
            quickSort(array, leftMarker, rightBorder, isSortMinToMax);
        }
        if (leftBorder < rightMarker) {
            quickSort(array, leftBorder, rightMarker, isSortMinToMax);
        }
    }        
    return array;
}

function swapElements(array, index1 , index2) {
    let tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp;
}
