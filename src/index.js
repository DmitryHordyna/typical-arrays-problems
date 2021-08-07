
exports.min = function min(array) {
  if (typeof array === "undefined") {
    return 0
  } else if  (array.length === 0){
    return 0
  }else {
    let min = array[0]
    for (let i = 0; i < array.length; i += 1) {
      if (min > array[i]) {
        min = array[i]
      }
    }
    return min
  }

}

exports.max = function max(array) {
    if (typeof array==="undefined" ) {
    return 0
    } else if (array.length === 0) {
      return 0
    }else {
   let max=array[0]
      for (let i = 0; i < array.length; i += 1) {
        if (max < array[i]) {
          max = array[i]
        }
      }
      return max
  }

}

exports.avg = function avg (array) {
  if (typeof array==="undefined" ) {
    return 0
  } else if (array.length === 0) {
    return 0
  }else {
  let total=0
  for (let i = 0; i < array.length; i += 1){
   total+=array[i] 
  }
  return  total / array.length

  }
}
