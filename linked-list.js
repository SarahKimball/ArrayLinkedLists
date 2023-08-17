class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  pop() {
    if (!this.head) {
      throw new Error("List is empty.");
    }

    let current = this.head;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    if (prev) {
      prev.next = null;
      this.tail = prev;
    } else {
      this.head = null;
      this.tail = null;
    }

    return current.value;
  }

  shift() {
    if (!this.head) {
      throw new Error("List is empty.");
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return value;
  }

  getAt(idx) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === idx) {
        return current.value;
      }
      current = current.next;
      count++;
    }

    throw new Error("Index is invalid.");
  }

  setAt(idx, val) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === idx) {
        current.value = val;
        return;
      }
      current = current.next;
      count++;
    }

    throw new Error("Index is invalid.");
  }

  insertAt(idx, val) {
    if (idx === 0) {
      this.unshift(val);
      return;
    }

    let current = this.head;
    let prev = null;
    let count = 0;

    while (current) {
      if (count === idx) {
        const newNode = new Node(val);
        prev.next = newNode;
        newNode.next = current;
        return;
      }

      prev = current;
      current = current.next;
      count++;
    }

    if (count === idx) {
      this.push(val);
      return;
    }

    throw new Error("Index is invalid.");
  }

  removeAt(idx) {
    if (idx === 0) {
      return this.shift();
    }

    let current = this.head;
    let prev = null;
    let count = 0;

    while (current) {
      if (count === idx) {
        prev.next = current.next;
        if (!current.next) {
          this.tail = prev;
        }
        return current.value;
      }

      prev = current;
      current = current.next;
      count++;
    }

    throw new Error("Index is invalid.");
  }

  // Additional method to calculate the average of the linked list values
  average() {
    if (!this.head) {
      return 0;
    }

    let sum = 0;
    let count = 0;
    let current = this.head;

    while (current) {
      sum += current.value;
      count++;
      current = current.next;
    }

    return sum / count;
  }
}
