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

    // Insert first Node.  Create a function that will take in the new node in the beginning of the list. We are going to pass through data. 
    insertFirst(data) {  
        this.head = new Node(data, this.head) // The new node data will be passed through the head of LinkedList contructor.
        this.size++; // Increment size by 1.  
    }

    // Insert last node.Create a function that will take in a new node at the end of the list. We are going to pass through data. 
    insertLast(data) {
        let node = new Node(data) // The new node data will be passed through the head of the linkedList constructor.
        let current; // Initialize current.

        // If empty, make it the head. 
        if(!this.head) { // If there is no head or the head is empty, you can use '!this.head' or you can use 'this.head = null'.
            this.head = node; // Let the node become the head. 
        } else {  // If there is a head, then perform the following instructions. 
            current = this.head // You set the current variable to this.head so you can start in the beginning. 

            while(current.next) { // While there is a next property in current, perform the following instructions. 
                current = current.next; // this will allow us to traverse through the list. 
            }

            current.next = node;  // The node will be passed through the current.next poperty.
        }

        this.size++; // Increment size by 1.
    }

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
ll.insertFirst(200); // Insert the number 200 into the LinkedList. 
ll.insertFirst(300); // Insert the number 300 into the LinkedList. 
ll.insertLast(400); // Insert the number 400 into the LinkedList. 

ll.printListData(); // Call the Method to print the data.