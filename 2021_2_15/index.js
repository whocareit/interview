const bubbleSort = arr => {
    let [temp, n, status] = [0, arr.length, false];
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] >= arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                status = true;
            }
        }
        if (!status) {
            return;
        }
    }
    return arr;
}
//时间复杂度为最好为O(n)，最坏为O(n^2)
// console.log(bubbleSort([3,1,56,23,14,45]));

const selectSort = arr => {
    let n = arr.length, min = 0;
    for (let i = 0; i < n - 1; i++) {
        min = i;
        for (let j = i+1; j < n; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// console.log(selectSort([3,2,7,5,9,3]));
//时间复杂度最为O(n^2)

//稳定的排序算法：简单理解就是，能保证排序前2个相等的数所在序列的前后相对位置顺序和排序后它们两个的前后位置顺寻相同