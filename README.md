# ArrayLinkedLists

This repository contains an implementation of a LinkedList class and a CircularArray class, along with various tasks related to these data structures. The purpose of this assignment is to practice working with linked lists and circular arrays, as well as implementing different operations on them.

LinkedList Class
    The LinkedList class implements a basic singly linked list with methods for adding, removing, and manipulating nodes. The following methods are implemented:

    push(val): Appends a new node with the given value to the end of the linked list.
    unshift(val): Adds a new node with the given value to the beginning of the linked list.
    pop(): Removes and returns the value of the last node in the linked list.
    shift(): Removes and returns the value of the first node in the linked list.
    getAt(idx): Retrieves the value at the specified index in the linked list.
    setAt(idx, val): Sets the value of the node at the specified index to the given value.
    insertAt(idx, val): Inserts a new node with the given value at the specified index.
    removeAt(idx): Removes and returns the value of the node at the specified index.
    average(): Calculates the average of the values in the linked list.
    CircularArray Class
    The CircularArray class implements a circular array, a data structure where the last item wraps around to the first item. This class provides methods to add items, rotate the array, and retrieve items by index.

Running the Tests
    To ensure the correctness of the implemented methods, unit tests have been provided using the Jest testing framework. To run the tests, follow these steps:

    Clone this repository to your local machine.
    Navigate to the repository's root directory using a terminal.
    Run the following command to install the required dependencies:
    
    Copy code
        npm install
    After the installation is complete, run the tests using the following command:
    bash
    Copy code
        npm test
    The tests will execute, and you'll see the results indicating whether the methods pass or fail for different scenarios.

Further Study
    The README provides an introduction to the tasks included in this assignment. Feel free to explore the code in the repository to better understand the implementations and how the provided test suite works. Additionally, you can attempt the "Further Study" tasks mentioned in the assignment to enhance your understanding of linked lists and circular arrays.

    Please note that this is a template for a README file. You can customize and expand it further based on your specific assignment and the level of detail you want to provide to users.