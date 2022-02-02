class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
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

console.log(graph.Djikstra("B", "F"));