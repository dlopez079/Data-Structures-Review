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

     //Convert the queue to an array
    toArray = () => {
    let arr = [];
    let current = this.head;
    while(current){
      arr.push(current.element);
      current = current.next;
    }
    
    return arr;
  }
    // To print
    print() {
       
        document.getElementById('output').innerHTML = this.toArray();

    }

    display() {

    }
    // removeFrom(index)
    removeElement (element) { 
        var current = this.head; 
        var prev = null; 
 
        // iterate over the list 
        while (current != null) { 
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.element === element) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
                return current.element; 
            } 
            prev = current; 
            current = current.next; 
        } 

        console.log(-1);
        return -1; 
    }

  }

// Create queue
const Q1 = new Queue();

// Create Q2
const Q2 = new Queue();

// Clear the input of the user so they can enter another value. 
function clearInput() {
  document.getElementById('inputField').value = "";
}

// Capture User's Input
function capture() {

  // Capture input from user.
  const x = document.getElementById('inputField').value;
  
  // Make sure you change the input into a number.
  parseInt(x);

  
clearInput();
createQ1(x);
isPrime();
}

function createQ1(x) {
    // If the input is anything other than a number, let the user know they have to inter
  // something else. 
  if (parseInt(x)) {
 
    // Because this is an integer, we can move forward. 
    // for Loop is established so all numbers between x (users input) and 2 gets pushed into Q1. 
    for(let i = 2; i < x; i++) {
    	Q1.enqueue(i);
    }
    
  } else {
  	console.log("This is not an integer")
    document.getElementById('output').innerHTML = "Please put in a number!"
  }
}


function isPrime() {
    let length = Q1.size()+1;
    let isComposite = new Queue();
    let isPrime = new Queue();

    for (let i = 2; i < length; i++) {
        let current = i;
        
        // Grab the composit numbers and push them to the Composite Queue.
        for(let f = i*i; f <= length; f += i) {
            current = f;
            console.log("Composite: " + current);  
            isComposite.enqueue(current);
            Q1.removeElement(current);
            isPrime.enqueue(Q1.head);
            
        }
        current = current.next;
    }

    return isPrime.print();
}

// TESTING PRINT DISPLAY
// function printDisplay () {
//   document.getElementById('outputField').innerHMTL = 
//   "INTERATION 1: " + isComposite.toArray() + "Q2" + Q1.toArray();
// }








