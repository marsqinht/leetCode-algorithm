

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {

  let node = l1.val <= l2.val ? l1 : l2
  let leftIndex = l1.val <= l2.val ? l1.next : l1
  let rightIndex =  l1.val <= l2.val ? l2 : l2.next

  let currIndex = l1.val <= l2.val ? leftIndex : rightIndex

  let flag = true

  while (flag) {
    if(currIndex.val) {}
  }

  return node
}


const l1 = [1,2,3,5].map((v,i) => {
  return new ListNode(v)
}).map((v,i, array) => {

  v.next = array[i+1]
  return v
})
const l2 = [4,7,9,10].map((v,i) => {
  return new ListNode(v)
}).map((v,i, array) => {

  v.next = array[i+1]
  return v
})


console.log(mergeTwoLists(l1[0], l2[1]))