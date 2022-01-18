function frankenSplice(arr1, arr2, n) {
  let arr2copy = [...arr2];
  arr2copy.splice(n,arr1.length,...arr1,...arr2copy.slice(n,arr2.length))
 
  return arr2copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);