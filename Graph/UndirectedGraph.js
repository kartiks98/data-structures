const { removeEdge: removeVertexEdge } = require("../Graph/DirectedGraph");

class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return "Vertex already added";
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) return `"${vertex1}" vertex not found.`;
    if (!this.adjacencyList[vertex2]) return `"${vertex2}" vertex not found.`;

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) return `"${vertex1}" vertex not found.`;
    if (!this.adjacencyList[vertex2]) return `"${vertex2}" vertex not found.`;

    this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return `"${vertex}" vertex not found.`;

    this.adjacencyList[vertex].forEach((v) => {
      removeVertexEdge(v, vertex);
    });
    delete this.adjacencyList[vertex];
  }
}
