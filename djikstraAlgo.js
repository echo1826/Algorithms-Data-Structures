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
        this.bubbleUp();
    }
    bubbleUp() {
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

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
    Djikstra(start, end) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];
        //* build up initial state
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            }else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // console.log(distances);
        //* as long as there is something to visit
        while(nodes.values.length) {
            smallest = nodes.dequeue().val;
            if(smallest === end) {
                // done here, build path to return
                // console.log(distances);
                // console.log(previous);
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.adjacencyList[smallest]) {
                    //* find neighboring node
                    let neighborNode = this.adjacencyList[smallest][neighbor];
                    // console.log(neighborNode);
                    //* calculate distance to neighboring node
                    let candidate = distances[smallest] + neighborNode.weight;
                    if(candidate < distances[neighborNode.node]) {
                        //* updating new smallest distance to neighbor
                        distances[neighborNode.node] = candidate;
                        //* updating previous - How we got to neighbor
                        previous[neighborNode.node] = smallest;
                        //* enqueue in priority queue with new priority
                        nodes.enqueue(neighborNode.node, candidate);
                    }
                }
            }
        }
        // console.log(path);
        return path.concat(smallest).reverse();
    }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Djikstra("A", "E"));