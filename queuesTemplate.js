// Node: To create the nodes of the list
class Node {
    constructor(elm){
      this.element = elm;
      this.next = null;
    }
  }

  class Queue {
    constructor(){
      this.length = 0;
      this.head = null;
    }
    
     //Push data in the queue
     enqueue = (elm) => {
      let node = new Node(elm),
      current;
    
      //If head is empty then 
      //Add the node at the beginning
      if(this.head === null){
        this.head = node;
      }else{
        //Else add the node as the
        //Next element of the existing list
        current = this.head;
        while(current.next){
          current = current.next;
        }
  
        current.next = node;
      }
  
      //Increase the length
      this.length++;
    }
     
     //Remove the item from the queue
     dequeue = () => {
      let current = this.head;
      
      //If there is item then remove it 
      //and make the next element as the first
      if(current){
        let elm = current.element;
        current = current.next;
        this.head = current;
        this.length--;
        return elm;
      }
      
      return null;  
    }
    
    // Return the first element in the queue
    front = () => {    
      if(this.head){    
        return this.head.element;
      }
  
      return null;
    }
    
    //Return the last element in the queue
    rear = () => {    
      let current = this.head;
      
      //If head is empty
      //Return null
      if(current === null){
        return null;
      }
      
      //Return the last elememnt
      while(current.next){
        current = current.next;
      }
  
      return current.element;
    }
    
    //Check if stack is empty
    isEmpty = () => {
      return this.length === 0;
    }
    
    //Return the size of the stack
    size = () => {
      return this.length;
    }
    
    //Clear the stack
    clear = () => {
      this.head = null;
      this.length = 0;
    }

    // To print
    print() {
        let current = this.head; // Set the current variable to the head of the queue.

        while(current) { // While it's true there is a node with a head property
            console.log(current.element); // Display queue in table format.
            current = current.next; // Change the variable to the next variable.
        }
    }
  }



// CREATED A TEST FOR Q1
function testQ1 () {

    // TESTING Q1
    console.log("TEST FOR Q1");
    let Q1 = new Queue(); // Create Q1 (first Queue)
    console.log(Q1.isEmpty()); // Should return True
    Q1.enqueue("1"); // Should list 1 element
    Q1.enqueue("2"); // Should list 2 element
    Q1.enqueue("3"); // Should list 3 element
    console.log(Q1.isEmpty()); // Should return false
    console.log("This is the front: " + Q1.front()); // Should return 1
    console.log("This is the rear element: " + Q1.rear()); // Should return 3
    console.log("This is the size: " + Q1.size()); // Should return the size of Q1 which is 3.
    Q1.print(); // Should print Q1 List
    Q1.clear(); // Should clear the Q1.
    console.log(Q1.isEmpty()); // Should return True
    console.log("");
}

testQ1();

// CREATED A TEST for Q2
function testQ2 () {

    // TESTING Q1
    console.log("TEST FOR Q2");
    let Q2 = new Queue(); // Create Q1 (first Queue)
    console.log(Q2.isEmpty()); // Should return True
    Q2.enqueue("4"); // Should list 1 element
    Q2.enqueue("5"); // Should list 2 element
    Q2.enqueue("6"); // Should list 3 elemnet
    console.log(Q2.isEmpty()); // Should return false
    console.log("This is the front: " + Q2.front()); // Should return 4
    console.log("This is the rear element: " + Q2.rear()); // Should return 6
    console.log("This is the size: " + Q2.size()); // Should return the size of Q1 which is 3.
    Q2.print(); // Should print Q2 List
    Q2.clear(); // Should clear the Q2.
    console.log(Q2.isEmpty()); // Should return True
    console.log("");
}

testQ2();


