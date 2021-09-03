


class Node {

    constructor(value){
            this.value = value
            this.next = null
    }

}


class Stack {

constructor(){
 this.array = []

}

peek(){


    return this.array[this.array.length-1]
}

push(value){


 this.array.push(value)


}


pop (){

 
    this.array.pop()

}

}

let myStack = new Stack();




myStack.push("one")
myStack.push("two") 
myStack.push("three")
myStack.pop()

console.log(myStack.peek())