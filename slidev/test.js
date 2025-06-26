const a = '1'
const b = '2'
const c = '3'
const d = '4'
const e = '5'
const f = '6'

// 快速排序函数
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// 测试用例
const testArray = [5, 3, 8, 4, 2, 7, 1, 10, 9, 6];
console.log('原始数组:', testArray);
const sortedArray = quickSort(testArray);
console.log('排序后的数组:', sortedArray);
