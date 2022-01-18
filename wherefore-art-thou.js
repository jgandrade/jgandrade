function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line

  let sourceObjectValues = Object.values(source);
  let sourceObjectKeys = Object.keys(source);
  let collectionObjectKeys = collection.map(e => Object.keys(e));
  let checkIfAllExisted = 0;
  let arrToCheck = [];

  collectionObjectKeys.forEach((e, index) => {
    sourceObjectKeys.forEach(elem => {
      if (e.includes(elem)) {
        checkIfAllExisted++;
      }
      if (checkIfAllExisted == sourceObjectKeys.length) {
        arrToCheck.push(collection[index]);
      }
    });
    checkIfAllExisted = 0;
  });

  let collectionObjectValues = arrToCheck.map(e => Object.values(e));

  collectionObjectValues.forEach((e, index) => {
    sourceObjectValues.forEach(elem => {
      if (e.includes(elem)) {
        checkIfAllExisted++;
      }
      if (checkIfAllExisted == sourceObjectValues.length) {
        arr.push(arrToCheck[index]);
      }
    });
    checkIfAllExisted = 0;
  });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });