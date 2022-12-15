/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
function ListNode(key, val, prev, next) {
  this.key = key
  this.value = val
  this.next = next
  this.prev = prev
}

class LRUCache {
  
  constructor(capacity) {
    this.capacity = capacity
    this.hashMap = {}
    this.length = 0
    this.dummyHead = new ListNode()
    this.dummyTail = new ListNode()
    // this.dummyTail.prev = this.dummyHead
    this.dummyHead.next = this.dummyTail

  }

  get(key) {
    if(!this.hashMap[key]) return -1

    return this.hashMap[key].value
  }
  put(key, value) {

    if(this.capacity === 0) return

    if(this.capacity === this.length) {
      const lastNode = this.dummyTail.prev.prev
      console.log(lastNode)
      lastNode.next = this.dummyTail
    }
    const node = new ListNode(key, value)

    node.next = this.dummyHead.next
    this.dummyHead.next = node
    node.next.prev = node
    node.prev = this.dummyHead

    if(!this.hashMap[key]) {
      this.length +=1
    } else {
      const prevNode = this.hashMap[key].prev
      const nextNode = this.hashMap[key].next
      prevNode.next = nextNode
    }

    this.hashMap[key] = node
  }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

