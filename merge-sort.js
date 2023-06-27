function merge(arr1, arr2) {
  const sortedArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }
  return [...sortedArr, ...arr1, ...arr2];
}

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  let mid = parseInt(arr.length / 2);
  let leftArr = arr.splice(0, mid);
  let rightArr = arr.splice(mid);
  let arr1 = mergeSort(leftArr);
  let arr2 = mergeSort(rightArr);
  return merge(arr1, arr2);
}
