
exports.min = function min(array) {
  if (Array.isArray(array) === false || array === undefined || array.length === 0) {
    return 0;
  }
  return Math.min.apply(null, array);

}

exports.max = function max(array) {
  if (Array.isArray(array) === false || array === undefined || array.length === 0) {
    return 0;
  }
  return Math.max.apply(null, array);
}

exports.avg = function avg(array) {
  if (Array.isArray(array) === false || array === undefined || array.length === 0) {
    return 0;
  }
  let elements_average = 0;
  for (let i = 0; i < array.length; i += 1) {
    elements_average += array[i];
  }
  elements_average /= array.length;
  return elements_average;
}
