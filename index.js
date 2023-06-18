// Add your functions here
function map(sourceArray, func) {
  let result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(func(sourceArray[i]));
  }
  return result;
}

function reduce(sourceArray, func, startingValue) {
  let result = startingValue !== undefined ? startingValue : sourceArray[0];
  let i = startingValue !== undefined ? 0 : 1;

  for (; i < sourceArray.length; i++) {
    result = func(sourceArray[i], result);
  }
  return result;
}
