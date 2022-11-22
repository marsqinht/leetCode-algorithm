class StringStack {
  #list
  #size
  #capacity
  constructor(capacity) {
    this.#capacity = capacity
    this.#list = []
    this.#size = 0
  }
  push(element) {
    if(this.isFull()) {
      console.error('capacity limit exceeded');
      return 
    }
    this.#list.push(element)
    this.#size++
  }
  pop() {
    this.#list.pop()
    this.#size--
  }
  isEmpty(){ 
    return this.#size === 0
  }
  isFull() {
    return this.#size === this.#capacity
  }
  getSize() {
    return this.#size
  }
  print() {
    for (let i = 0; i < this.#list.length; i++) {
      const element = this.#list[i];
      console.log(i, element)
    }
  }
}

const stack = new StringStack(1)


stack.push(1)

stack.print()



