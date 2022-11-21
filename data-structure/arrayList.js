
class ArrayList {
  #length
  #list
  #limtCount
  constructor(limtCount) {
    this.list = []
    this.length = 0
    this.limtCount = limtCount
  }


  at(index) {
    this._checkIndex(index)
    return this.list[index]
  }

  push(element) {
    const size = this.getSize()
    this.list[size] = element

    this.length += 1

    return this.list
  }

  pop() { 
    this.list[this.length - 1] = null
    this.list.length -= 1

    this.length -= 1

    return this.list
  }

  shift() {
    for (let i = 0; i < this.length; i++) {
      this.list[i] = null
      this.list[i] =  this.list[i+1]
    }

    this.list.length -= 1

    this.length -= 1

    return this.list
  }

  unshift(el) {
     let temEle =  this.list[0]
     for (let i = 0; i < this.length; i++) {
       let temp =  this.list[i+1]
       this.list[i+1] = temEle
       temEle = temp
     }

     this.list[0] = el
     this.length += 1
 
     return this.list
  }

  insert(el, index) {
    let temEle =  this.list[index]
    for (let i = 0; i < this.length; i++) {
      if(i >= index) {
        let temp =  this.list[i+1]
        this.list[i+1] = temEle
        temEle = temp
      }
     
    }
    this.list[index] = el
    this.length += 1

    return this.list
  }

  getElements() {
    return this.list
  }

  
  getSize() {
    return this.length
  }

  _checkIndex(index) {
    if(index > this.length - 1) {
      throw new Error('错误的指针')
    }
  }

}


const list = new ArrayList(8)

list.push(3)
list.push(3)
list.push(5)

// list.unshift(9)
list.insert(1,2)
// list.shift()

console.log(list.getElements())

