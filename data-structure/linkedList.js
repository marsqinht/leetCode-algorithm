class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  #head
  #size
  constructor() {
    this.#head = null
    this.#size = 0
  }

  add(element) {

    const node = new Node(element)

    if(this.#head === null) {
      this.#head = node
    } else {
      this.getNodeFromIndex(this.#size - 1).next = node
    }

    this.#size++
  }

  insertAt(element, index) {
    const node = new Node(element)

    if(this.#head === null) {
      this.#head = node
      this.#size++
      return
    }

    if(index === 0) {
      node.next = this.#head
      this.#head = node
      return
    }

    const prevNode = this.getNodeFromIndex(index - 1)

    node.next = prevNode.next

    prevNode.next = node

    this.#size++
  }

  removeFrom(index) {


    if(this.#head === null) {
      return
    }

    if(index === 0) {
      this.#head = this.#head.next
      this.#head.next = null
      this.#size--
      return
    }
    const node = this.getNodeFromIndex(index - 1)

    node.next = node.next.next

  
    this.#size--
  }


  // functions to be implemented
  // add(element)
  // insertAt(element, location)
  // removeFrom(location)
  // removeElement(element)

  // Helper Methods
  // isEmpty
  // size_Of_List
  // PrintList
  getNodeFromIndex(index) {
    let node = this.#head
    let i = 0

    if(index > this.#size || !Number.isInteger(index) || index < 0) {
      throw new Error('index 错误')
    }
    

    while(node.next) {
     
      if(i === index) return node
      node = node.next
      i++
    }
    return node
  }

  get(value) {
    let currNode = this.#head
    while(node.next) {
      currNode = node.next
    }

    if(currNode.value === value) return currNode 

  }

  printList() {
    let node = this.#head
    let i = 0

    if(!node) {
      console.log('Empty LinkedList');
      return
    } else {
      console.log(i, `value:`,node?.value,  `next:`, node?.next?.value);
    }
    while(node.next) {
      node = node.next
      i++
      console.log(i, `value:`,node?.value,  `next:`, node?.next?.value);
    }

  }
}

const linkedList = new LinkedList()

linkedList.add(1)
linkedList.add(2)
// linkedList.insertAt(3, 4)

linkedList.removeFrom(1)

linkedList.printList()


