class DirectedGraph {
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
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) return `"${vertex1}" vertex not found.`;
    if (!this.adjacencyList[vertex2]) return `"${vertex2}" vertex not found.`;

    this.adjacencyList[vertex1].filter((v) => v !== vertex2);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return `"${vertex}" vertex not found.`;

    this.adjacencyList[vertex].forEach((v) => {
      this.removeEdge(v, vertex);
    });
    delete this.adjacencyList[vertex];
  }
}

module.exports = DirectedGraph;
