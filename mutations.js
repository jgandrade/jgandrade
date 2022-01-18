function mutation(arr) {
  let letters = arr[1].split("").map(e=> `(?=.*${e})`).join("").split("");
  letters=letters.join("");
  let toTest = arr[0];
  let regex = new RegExp(letters,"gi");

  return regex.test(toTest);
}

mutation(["hello", "hey"]);