// Create an Object (template) for the Nodes.
class Nodes {
    constructor(data) {
      this.last = null;
      this.data = data;
      this.next = null;
    }
  }
  
  // Create an Object for a LinkedList so we can use to print.
  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    // Push Method to insert data into linkedlist
    push(data) {
      this.head = new Nodes(data, this.head);
      // The new node data will be passed through the head of LinkedList contructor.;
      this.length++; // Increment size by 1.  
    }
  
  }
  // Create an object for the queue.
  class Queues {
    constructor() {
      this.front = null;
      this.back = null;
      this.length = 0;
    }
  
    // Check to see if the queue is empty. If the queue has no front, then return false.  If there is nothing in the queue, then this will return true.
    isEmpty() {
      return !this.front;
    }
  
    // An enqueue method
    enqueue(data) {
      //Create a new node and capture the data.
      let newNode = new Nodes(data);
  
      // If queue is empty (Insert Condition)
      if (this.isEmpty()) {
  
        // Point front and back pointers to new node.
        this.front = this.back = newNode;
  
      }
  
      // else the queue is not empty
      else {
  
        // push node to the back of the queue by pointing the last node to the newly created node.
        this.back.next = newNode;
  
        // Once the newNode is established as the next node, move the back pointer to the new node.
        this.back = newNode;
  
      }
  
      // Increment the length of the queue.
      this.length++;
  
      // Print the lists to the console.log.
      this.print();
  
      // Print the list to the screen.
      this.printDisplay();
  
    }
  
    // An dequeue method
    dequeue() {
  
      // Pointer to the front of the queue.
      let frontNode = this.front;
      const travelNode = this.front;
  
      // Check if the queue is not empty and there is a node. 
      if (!this.isEmpty()) {
  
        // Move front to the next element.  This.front currently equals A but we are now going to tell the queue, that it equals B.
        this.front = this.front.next;
      }
  
      // Check if front is null / past to the end of the queue
      if (!this.front) {
  
        // set back to null. 
        this.back = null;
      }
  
      /* 
              // print list.
              this.print(); */
  
      // return node at the front off the queue.
      return frontNode;
    }
  
    print() {
  
      // If the queue is empty.  If there is no front, console.log "Empty Queue"
      if (this.isEmpty()) {
        console.log("EMPTY QUEUE");
      }
  
      //else if it's not empty
      else {
        // Temp arr
        let tmpArr = [];
  
        // temp variable to the front of the queue
        let tmp = this.front;
              
        // iterate through the queue
        while (tmp) {
          // add value into arr
          tmpArr.push(tmp.data);
  
          // Move to the next element
          tmp = tmp.next;
        }
  
        // print the values
        console.log(tmpArr.join(', '));
        
        
        // The below code will print out to the DOM. We will not use below to pring to DOM. 
        document.getElementById('output').innerHTML = (tmpArr.join(', '));
      }
  
    }
  
    // Print method to show list on screen. 
    printDisplay() {
  
      // If the queue is empty.  If there is no front, console.log "Empty Queue"
      if (this.isEmpty()) {
        console.log("EMPTY QUEUE");
      }
  
      //else if it's not empty
      else {
        // Temp LinkedList
        let list = new LinkedList();
      
        // temp variable to the front of the queue
        let current = this.front;
            
        // iterate through the queue
        while (current) {
              
          // add value into List
          list.push(current.data);
          
          // Move to the next element
          current = current.next;
         
             
          // Loop through the Link List and print out the elements
          let i;
            if(i=0, i < list.length, i++) {
                document.getElementById('output').innerHTML = (list.head.data);
            }
        
        }
            
        
      }
  
    }
  
  
  
  
  }
  
  // Queue number 1 is created. 
  var Q1 = new Queues();
  
  // Start Queue with the number 2.
  /* Q1.enqueue("Q1: " + 2); */
  
  // Queue number 2 is created. 
  var Q2 = new Queues();
  
  // Move front node from Q1 to Q2
  function move() {
  
    // Save the front node in a variable called Q1FrontNode
    let Q1FrontNode = Q1.front.data;
  
    // Add to the second queue.
    Q2.enqueue("Q2 " + Q1FrontNode);
  
    return;
  }
  
  // Clear the input of the user so they can enter another value. 
  function clearInput() {
    document.getElementById('inputField').value = "";
  }
  
  // Capture the input of the user when they click on the submit button.
  function capture() {
    const input = document.getElementById('inputField').value;
    /* Q1.enqueue(input); */
    clearInput();
  }
  
  
  
  //  TESTING CODE FOR CAPTURE. 
  // GET THE FIRST ITERATION 
  function capture2() {
    // Capture input from user.
    // const x = document.getElementById('inputField').value;
    const x = "10";
    
    // Make sure you change the input into a number.
    parseInt(x);
    console.log(x);
    
  
    
    // If the input is anything other than a number, let the user know they have to inter
    // something else. 
    if (Number.isInteger() == x) {
      
      // Because this is an integer, we can move forward. 
      for(let i = 2; i <= x; i++) {
          Q1.enqueue(i);
      }
  
    } else {
        console.log("This is not an integer")
      document.getElementById('output').innerHTML = "Please put in a number!"
      
    }
  
  }
  