const arr = [1, 3, 4, 6, 8, 3, 5, 7, 3]


function sort(arr) {

  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];

    for (let j = 0; j < i; j++) {
      const curr = arr[j]
      if(curr > val) {
        arr[j + 1] = arr[j]
       
      }
      
    }
    
  }
  return arr
}

console.log('object :>> ', sort(arr));