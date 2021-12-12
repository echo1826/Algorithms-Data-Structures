// doubly linked list node class
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let oldTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }
    shift() {
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
            this.head = this.head.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let middle = this.length/2;
        if(index < middle) {
            let current = this.head;
            let count = 0;
            while(count !== index) {
                current = current.next;
                count++;
            }
            return current;
        }else {
            let current = this.tail;
            let count = this.length - 1;
            while(count !== index) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }
    set(index, val) {
        if(index < 0 || index >= this.length) return false;
        let node = this.get(index);
        if(node) {
            node.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if(index < 0 || index > this.length) {
            return false;
        }
        if(index === this.length) {
            return !!this.push(val);
        }
        if(index === 0) {
            return !!this.unshift(val);
        }
        let newNode = new Node(val);
        let pre = this.get(index - 1);
        let next = pre.next;
        pre.next = newNode;
        newNode.prev = pre;
        next.prev = newNode;
        newNode.next = next;
        length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >=this.length) return undefined;
        if(index === 0) return this.shift(index);
        if(index === this.length - 1) return this.pop();
        let foundNode = this.get(index);
        foundNode.prev.next = foundNode.next;
        foundNode.next.prev = foundNode.prev;
        foundNode.prev = null;
        foundNode.next = null;
        this.length--;
        return foundNode;
    }
    reverse() {
        if(this.length === 0) return undefined;
        if(this.length === 1) return this;
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let pre = null;
        while(current) {
            let next = current.next;
            current.next = pre;
            current.prev = next;
            pre = current;
            current = next;
        }
        return this;
    }
}


let list = new DoublyLinkedList;
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list);
console.log(list.get(3));