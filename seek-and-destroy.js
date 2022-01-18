function destroyer(arr, ...args) {
  arr=arr.filter(e=> args.includes(e)? 0 : e);
  console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);