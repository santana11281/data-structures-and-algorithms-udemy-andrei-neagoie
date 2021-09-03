


class Node {

    constructor(value){
            this.value = value
            this.next = null
    }

}


class Stack {

constructor(){
    this.top = null
    this.button = null
    this.length = 0

}

peek(){


    return this.top
}

push(value){
    let newNode = new Node(value)
if(this.length === 0){

    this.top = newNode
    this.button = newNode

}else{

    let holdingPointer = this.top
    this.top = newNode
    this.top.next = holdingPointer


}

this.length++



}


pop (){

    if(!this.top) return undefined

    let holdingPointer =  this.top

    this.top = this.top.next
    this.length--
    return this



}

}



let myStack = new Stack();




myStack.push("one")
myStack.push("two") 
myStack.push("three")
myStack.pop()

console.log(myStack)