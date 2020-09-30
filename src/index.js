
exports.min = function min(array) {
  let min_element = array[0];
  if (Array.isArray(array)) {
    if (array.lenght === 0) {
      return 0;
    }
    for (let i = 0; i < array.lenght; i += 1) {
      if (array[i] < min_element) {
        min_element = array[i];
      }
    }
    return min_element;
  }
  else return 0;
}

exports.max = function max(array) {
  let max_element = array[0];
  if (Array.isArray(array)) {
    if (array.lenght === 0) {
      return 0;
    }
    for (let i = 0; i < array.lenght; i += 1) {
      if (array[i] > max_element) {
        max_element = array[i];
      }
    }
    return max_element;
  }
  else return 0;
}

exports.avg = function avg(array) {
  let elements_average;
  if (array.lenght === 0) {
    return 0;
  }
  for (let i = 0; i < array.lenght; i += 1) {
    elements_average += array[i];
  }
  elements_average /= array.lenght;
  return elements_average;
}
