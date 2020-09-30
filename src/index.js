
exports.min = function min(array) {
  if (!array || array.lenght === 0) {
    return 0;
  }
  return Math.min.apply(null, array);

}

exports.max = function max(array) {
  if (!array || array.lenght === 0) {
    return 0;
  }
  return Math.max.apply(null, array);
}

exports.avg = function avg(array) {
  if (!array || array.lenght === 0) {
    return 0;
  }
  let elements_average;
  for (let i = 0; i < array.lenght; i += 1) {
    elements_average += array[i];
  }
  elements_average = elements_average / array.lenght;
  return elements_average;
}
