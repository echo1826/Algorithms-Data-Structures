// piece of data - val
//reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) return undefined;
        //* current is the current value in the list at each iteration
        let current = this.head;
        //* temp keeps track of the previous value as you move along the linked list
        let temp = current;
        while (current.next) {
            //* temp becomes the current value before it changes to the next value
            temp = current;
            current = current.next;
        }
        //* set the tail to the previous tail value
        this.tail = temp;
        //* set the current tail.next value to null becomes it became the current tail
        this.tail.next = null;
        this.length--;
        //* if there is no length after the pop, i.e. only one value in the list before pop make the linked list empty
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        //* return the deleted value
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index >= this.length || index < 0) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i <= index; i++) {
            current = current.next;
        }
        return current;
    }
    set(val, index) {
        let node = this.get(index);
        if (!node) {
            return false;
        }
        node.val = val;
        return true;
    }
    insert(val, index) {
        if(index < 0 || index > this.length) {
            return false;
        }
        if(index === this.length) { 
            //* !! operator coerces the truthy or falsey values given from push and unshift to actual boolean values
            return !!this.push(val);
        }
        if(index === 0) {
            return !!this.unshift(val);
        }
        let newNode = new Node(val);
        let pre = this.get(index - 1);
        let temp = pre.next;
        pre.next = newNode;
        newNode.next = temp;
        return true;
    }
}