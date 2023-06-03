let arr = [2, 6, 9, 16, 80];
let start = 0;
let end = arr.length - 1;
let target = 16;

function binarySearch(arr, start, end) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, mid + 1, end);
  } else {
    return binarySearch(arr, start, mid - 1);
  }
}

console.log("result =", binarySearch(arr, start, end));

