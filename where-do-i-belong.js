function getIndexToIns(arr, num) {
  arr.sort((a,b)=>a-b);
  if (arr.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (num == arr[i]) {
        return arr.indexOf(arr[i])
      }
      else if (num > arr[i] && num <= arr[i + 1]) {
        return arr.indexOf(arr[i + 1]);
      }
      else if (arr[i + 1] == undefined) {
        return arr.indexOf(arr[i]) + 1;
      }
    }
  }
}


console.log(getIndexToIns([2, 5, 10], 15));