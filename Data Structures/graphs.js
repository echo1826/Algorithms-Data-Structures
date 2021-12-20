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
}