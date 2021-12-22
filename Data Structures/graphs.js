// undirected graph
class Graph {
    constructor() {
        // this will hold the connections, or edges
        this.adjacencyList = {};
    }
    addVertex(vertexName) {
        // you can check to see if there is an existing key before you make the vertex
        if(!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = [];
        else {
            throw new Error("Fuck your life, bing bong this shit already exists");
        }
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1);
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        // delete is a reserved word in javascript that can delete properties of an object
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(startVertex) {
        let result = [];
        let visited = {};
        const adjacencyList = this.adjacencyList;
        const helper = (vertex) => {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            // for(let neighbor of adjacencyList[vertex]) {
            //     if(!visited[neighbor]) return depthFirstRecusive(neighbor);
            // }
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) return depthFirstRecursive(neighbor);
            })
        }
        helper(startVertex);
        return result;
    }
    depthFirstIterative(startVertex) {
        let vertices = [startVertex];
        let result = [];
        let visited = {};
        vertices.push(startVertex);
        visited[startVertex] = true;
        while(vertices.length > 0) {
            let vertex = vertices.pop();
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    vertices.push(neighbor);
                }
            })
            
        }
        return result;
    }
    breadthFirst(startVertex) {
        let queue = [startVertex];
        let result = [];
        let visited = {};
        while(queue.length > 0) {
            let vertex = queue.shift();
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            });
            
        }
    }
}