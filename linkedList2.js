class Node { // Create an object called Node that will collect data and next.
    constructor(data, next=null) { // Use a constructor to take in the data and next properties
        this.data = data; // Apply the data value to the this.data properties. 
        this.next = next; // Apply the next value to the this.next properties. 
    }
}

const n1 = new Node(100); // Create a new Node with the 'New' Constructor, take in the data and save it to a variable. 
console.log(n1);  // Show the results of what is in the n1 variable.

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first Node.  Create a function that will take in the new node. We are going to pass through data. 
    insertFirst(data) {  
        this.head = new Node(data, this.head) // The new node data will be passed through the head of LinkedList contructor.
    }

    // Insert last node.

    // Insert at Index

    // Get at Index

    // Remove at Index

    // Clear List

    // Print List Data
    printListData () {
        let current = this.head; // Set the current to the present node.

        while(current) {  // If there is a head (this.head, then the variable current will boolean true and execute the following commands. )
            console.table(current.data);  // The instructions are to console.table the current data vaalue.
            current = current.next;  // The current.next will now equal current so the new node can come into the list. 
        }
    };
}

const ll = new LinkedList(); // Create a new LinkedList using the template created from above and save the information in a variable called ll. 

ll.insertFirst(100); // Insert the number 100 into the LinkedList. 
ll.insertFirst(200); // Insert the number 100 into the LinkedList. 



ll.insertFirst(300); // Insert the number 100 into the LinkedList. 

ll.printListData(); // Call the Method to print the data.