
exports.min = function min(array) {
  let min=array[0]
  for (let i = 0; i < array.length; i += 1){
    if (min > array[i]) {
      min=array[i]
    }
    
  }
return array.length>0?min:0
}

exports.max = function max (array) {
   let max=array[0]
  for (let i = 0; i < array.length; i += 1){
    if (max < array[i]) {
      max=array[i]
    }
    
  }
return array===0?0:max
}

exports.avg = function avg (array) {
  let total=0
  for (let i = 0; i < array.length; i += 1){
   total+=array[i] 
  }
  return array? total/array.length:0

}
