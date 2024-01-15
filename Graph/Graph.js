class Graph {
  constructor(isDirected = false) {
    this.adjacencyList = {};
    this.isDirected = isDirected;
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return `Vertex "${vertex}" already added`;
    this.adjacencyList[vertex] = new Set();
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) return `Vertex "${vertex1}" not found.`;
    if (!this.adjacencyList[vertex2]) return `Vertex "${vertex2}" not found.`;

    if (this.adjacencyList[vertex1].has(vertex2))
      return `Vertex "${vertex1}" already has an edge with vertex "${vertex2}"`;

    this.adjacencyList[vertex1].add(vertex2);
    !this.isDirected && this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2, isVertexEdge) {
    if (!this.adjacencyList[vertex1]) return `Vertex "${vertex1}" not found.`;
    if (!this.adjacencyList[vertex2]) return `Vertex "${vertex2}" not found.`;

    const isDirectedAndNotVertexEdge = !this.isDirected || !isVertexEdge;
    if (!this.adjacencyList[vertex1].has(vertex2))
      return `Vertex "${vertex1}" don't have an edge with vertex "${vertex2}"`;

    this.adjacencyList[vertex1] = new Set(
      Array.from(this.adjacencyList[vertex1]).filter((v) => v !== vertex2)
    );
    if (isDirectedAndNotVertexEdge)
      this.adjacencyList[vertex2] = new Set(
        Array.from(this.adjacencyList[vertex2]).filter((v) => v !== vertex1)
      );
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return `Vertex "${vertex}" not found.`;

    this.adjacencyList[vertex].forEach((v) => {
      removeEdge(v, vertex, true);
    });
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph(); //Undirected Graph
// const graph = new Graph(true); //Directed Graph

// console.log(graph.addVertex("Tokyo"));
// console.log(graph.addVertex("Moscow"));
// console.log(graph.addVertex("Tokyo"));
// console.log(graph.addVertex("Berlin"));

// console.log(graph.addEdge("Moscow", "Tokyo"));
// console.log(graph.addEdge("Moscow", "Tokyoo"));
// console.log(graph.addEdge("Moscow", "Berlin"));
// console.log(graph.addEdge("Moscow", "Berlin"));

// console.log(graph.removeEdge("Moscow", "Berlin"));
// console.log(graph.removeEdge("Tokyo", "Berlin"));
// console.log(graph.removeEdge("Moscow", "Tokyoo"));
// console.log(graph.removeEdge("Moscow", "Tokyo"));
// console.log(graph.removeEdge("Moscow", "Tokyo"));

// console.log(graph.removeVertex("Tokyo"));
// console.log(graph.removeVertex("Moscow"));
// console.log(graph.removeVertex("Tokyo"));
// console.log(graph.removeVertex("Berlin"));

console.log(graph.adjacencyList);