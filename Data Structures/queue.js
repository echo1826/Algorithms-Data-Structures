class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //* adds val to queue at the end and returns size of queue
    enqueue(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    //* removes the first val that was added into the queue and returns that val
    dequeue() {
        if(!this.first) return null;
        let temp = this.first
        if(this.first === this.last) {
            this.first = null;
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}