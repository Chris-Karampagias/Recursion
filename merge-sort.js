function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let leftHalf = array.slice(0, array.length / 2);
    let rightHalf = array.slice(array.length / 2);
    let left = mergeSort(leftHalf);
    let right = mergeSort(rightHalf);
    let tmp = [];
    let min;
    while (left.length > 1 || right.length > 1) {
      if (left[0] < right[0]) {
        min = left[0];
        tmp.push(min);
        left.splice(0, 1);
      } else {
        min = right[0];
        tmp.push(min);
        right.splice(0, 1);
      }
    }
    if (left.length == 0) {
      for (let i = 0; i <= right.length - 1; i++) {
        tmp.push(right[i]);
      }
    } else if (right.length == 0) {
      for (let i = 0; i <= left.length - 1; i++) {
        tmp.push(left[i]);
      }
    } else if (left[0] < right[0]) {
      tmp.push(left[0]);
      tmp.push(right[0]);
    } else {
      tmp.push(right[0]);
      tmp.push(left[0]);
    }
    return tmp;
  }
}
