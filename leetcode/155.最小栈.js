/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

class MinStack {

  constructor() {
    this.stack = []
    this.min = null
  }

  push(val) {
    if(this.min === null) {
      this.min = val
    } else if (val < this.min) {
      this.min = val
    }
    this.stack.push(val)
  }
  pop() {
    const el = this.stack.pop()

    if(!this.stack.length) {
      this.min = null
    }
    if(el === this.min) {
      let min = this.stack[0]
      const len = this.stack.length
      for (let i = 1; i < len; i++) {
        const num = this.stack[i];
        if(num < min) {
          this.min = num
        }
        
      }
    }
  }
  top() {
    return this.stack[this.stack.length - 1]
  }
  getMin() {

    return this.min
  }
}
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

