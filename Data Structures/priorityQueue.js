// node class that will be stored in our priority queue data structure
class Node {
    constructor(val, priority) {
        this.val =  val;
        this.priority = priority;
        //* can use this property to add additional logic to add relationships between siblings so you can give more priority to another one
        // this.insertTime = Date.now();
    }
}

// modeled on a min binary heap
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if(element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let left, right;
            let swap = null;
            if (leftIndex < length) {
                left = this.values[leftIndex];
                if (left.priority < element.priority) {
                    swap = leftIndex;
                }
            }
            if (rightIndex < length) {
                right = this.values[rightIndex];
                if ((right.priority < element.priority && swap === null) || (swap !== null && right.priority < left.priority)) {
                    swap = rightIndex;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}