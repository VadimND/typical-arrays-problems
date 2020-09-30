
exports.min = function min (array) {  
  let res = Math.min.apply(null, array);
  if (array == null || array == '') {
    res = 0;
  } 
  return res;
}

exports.max = function max (array) {
  let res = Math.max.apply(null, array);
  if (array == null || array == '') {
    res = 0;
  } 
  return res;
}

exports.avg = function avg (array) {
  let sum = 0;
  let res;

  if (array == undefined || array == null || array == '') {
    res = 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];    
    }    
    res = sum/array.length;
  }
  return res;
}
