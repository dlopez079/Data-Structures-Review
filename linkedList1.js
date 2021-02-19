// To Define an OBJECT in JS with the properties required by this assignment
// This assignment is an object. It is similar to the object that we all start off with called the DOM. 
function List(_content) {        // We will define the list with the first link defined
    this.length = 1;                // Technically the list does NOT need a length property
    this.head = new Node(_content); // Creates the first Node
    this.last = this.head;          // When created - head and last are the same. Note - technically a List does not need a pointer to the last node
    return this;                    // Return a pointer to the newly created List
   }



// To Define a node object in JS with properties required by assignment
function Node(_content) {     // Implementation of a doubly linked list (last and next pointers) 
    this.content= _content;      // The value stored
    this.last = null;            // A pointer to the previous link
    this.next = null;            // a pointer to the next link
    return this;                 // returns the created node
   }

   
// I created a object literal.
// This shows that node 1 has a data of 100.
const n1 = {
    data: 100
}

// I created another object literal.
// This shows that node 2 has a data of 100. 
const n2 = {
    data: 200
}

// I create another object literal.
// This shows that nod 3 has a data of 300.
const n3 = {
    data: 300
}

// I create another object literal.
// This shows that nod 4 has a data of 400.
const n4 = {
    data: 400
}

n1.next = n2; // I created a pointer that will point n1 to n2
console.table(n1)  // Displayed the results on a Table. 

n2.next = n3; // I created a pointer that will point n2 to n3
console.table(n2) // Displayed the results on a Table.

n3.next = n4; // I created a pointer that will point n2 to n3
console.table(n3) // Displayed the results on a Table.

console.log(n1.next.next) // This will display when you run this js.
