const arr = [1, 3, 4, 6, 8, 3, 5, 7, 3]


function sort(arr) {
  for (let i = 0; i <  arr.length; i++) {
    let flag = false
    for (let j = 0; j < arr.length - i; j++) {
      const curr = arr[j]
      const next = arr[j + 1]
      if(curr > next) {
        const temp = curr
        arr[j] = next;
        arr[j + 1] = curr
        flag = true
      }
    }
    if(!flag) break
  }
  return arr
}

console.log('object :>> ', sort(arr));