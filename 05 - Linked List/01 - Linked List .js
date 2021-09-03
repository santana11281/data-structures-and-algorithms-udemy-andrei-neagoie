class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    let newNode = new Node(value);
    if (index >= this.length) {
      return this.append(value);
    }
    let leader = this.traverseToIndex(index - 1);
    let holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this;
  }

  printList() {
    const newArr = [];
    let currentNode2 = this.head;
    newArr.push(this.head.value);

    while (currentNode2.next !== null) {
      currentNode2 = currentNode2.next;
      newArr.push(currentNode2.value);
    }

    return newArr;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
 
    return currentNode;
  }

  remove(index) {
    

    let leader = this.head
    console.log("1",leader)
    let unWantedNode = leader.next
    console.log("2",unWantedNode)
    leader.next = unWantedNode.next
    console.log("3",leader.next)

    this.length--
    return this.printList()
  }

reverse(){
if(!this.head.next) return this.head

let first = this.head
let tail = this.head
let second = first.next

while(second){

  const temp = second.next
  second.next = first
  first = second
  second = temp

}
this.head.next = null
this.head = first
return this.printList()

}





}

const myLinkedList = new LinkedList(1);

myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
// myLinkedList.reverse()
// myLinkedList.insert(1, 99);
// myLinkedList.remove(2)

// myLinkedList.prepend(3)
console.log(myLinkedList.reverse());
