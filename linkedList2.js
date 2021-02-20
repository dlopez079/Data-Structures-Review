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
                current = current.next; // this will allow us to traverse through the list. This make the next number current until you get to the last node.
            }

            current.next = node;  // The node will be passed through the current.next poperty.
        }

        this.size++; // Increment size by 1.
    }

    // Insert at Index
    insertAt(data, index) {

        // If the index is less than 0 or greater than the size of the current LinkedList, this method will not execute. 
        // We will not be able to pull an index off of a list if it's not within the list size.
        if(index > 0 && index > this.size) {
            return;
        }

        // If it is the first index, we need to set it to the head. 
        if(index === 0) {
            this.head = new Node(data, this.head); // Create a new node and pass the data and this.head properties.
            return;
        }

        // After you verified that the index request is within the scop of the list*******

        // Initialize a new node with the data. 
        const node = new Node(data);
        let current, previous; // Initialize the variables current and previous.  We use Let becuase these variables will not be used outside of this method. 

        // Set current to first 
        current = this.head;
        let count = 0;
         
        while(count < index) {
            previous = current; // Node before the index
            count ++;  // Increment the count by one.
            current = current.next; // Node after the index.
        } 

        node.next = current; // Set the new value of next for the new node to current.
        previous.next = node;  // Yout want to set the node as previous.next.  This will place the node where the 

        this.size++; // Increment the size since we are putting in a new node.
    }

    // Get at Index
    // In this method, we are going to pass the index we are searching for.
    getAt(index) { 
        let current = this.head;  // We are going to set the current variable to equal the head of the Linked List
        let count = 0; // We are going to set the count variable to 0.  We will use this to increment the amount of nodes on the list. 

        
        // While there is a head on a node within the list, perform the following instructions. This will loop through the list.
        while(current) { 
            
            // The count will increment for each the nodes until it equals the index number that passes through.
            // When the count is equal to the index number, we will console.log the data of the node. 
            if(count == index) {
                console.log(current.data);
            }
            
            // If the count does not match the index requested, we will move on to the next node and increment the count. 
            count++; // This will increment the count.  The count will increment until it equals the index requested.  
            current = current.next; // The current head, which we saved in the variable current will now become current.next so we can move to the next node.
        }

        return null;
    }

    // Remove at Index
    // In this method, we are going to pass the index we are searching for.
    getRemove() {
        // Make sure that the index is within range. 

        // Create a previous and next variable so we can set it later. 

        // Go through the list with a while loop. 

        // Set the variables on the current loop to point to previous and to next.
        
    }

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
ll.insertAt(500, 2); // Insert the number 500 at the 2 index.

ll.printListData(); // Call the Method to print the data.

ll.getAt(2); // This will loop through the list until we find the the node in index 2.