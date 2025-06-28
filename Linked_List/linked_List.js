class Node{
constructor (data) {
this.data = data;
this.Next = null;
}
}

class LinkedList{
  constructor (){
    this.head = null;
    this.size = 0;
  }

  insertAtHead(data){
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }



}

let list = new LinkedList();
list.insertAtHead(32);
console.log(list);