class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  #first
  #last
  #size
  constructor() {
    this.#size = 0
  }

  size() {
    return this.#size
  }

  enqueue(item) {
    const node = new Node(item)

    const oldLast = this.#last

    if(this.isEmpty()) {
      this.#first = this.#last = node
    } else {
      this.#last.next = node
    }

    this.#size++

    return item
    
  }

  dequeue() {
    const firstItem = this.#first?.value
    this.#first = this.#first.next

    if(this.isEmpty()) {
      this.#last = undefined
      return
    }

    this.#size--

    return firstItem

  }

  isEmpty() {
    return this.#first === undefined
  }

  print() {

    let node = this.#first

    while (node) {
      console.log(node)
      node = node.next
    }
  }
}


const queue = new Queue()

// queue.enqueue(1)
// // queue.enqueue(2)
// queue.dequeue()
// console.log('queue.size() :>> ', queue.size());
// queue.print()