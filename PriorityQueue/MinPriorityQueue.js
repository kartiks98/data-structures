class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class MaxPriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.heap.push(newNode);
    const bubbleUp = (index) => {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].priority > this.heap[parentIndex]?.priority) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        bubbleUp(parentIndex);
      }
    };
    bubbleUp(this.heap.length - 1);
    return this.heap;
  }

  dequeue() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    const extractedVal = this.heap.pop();
    if (!extractedVal) return "Queue is empty";
    const bubbleDown = (index) => {
      const childIndexes = [2 * index + 1, 2 * index + 2];
      const isSwap =
        this.heap[index]?.priority < this.heap[childIndexes[0]]?.priority ||
        this.heap[index]?.priority < this.heap[childIndexes[1]]?.priority;
      if (isSwap) {
        const toSwapIndex =
          this.heap[childIndexes[0]]?.priority >
          (this.heap[childIndexes[1]]?.priority || -Infinity)
            ? childIndexes[0]
            : childIndexes[1];
        [this.heap[index], this.heap[toSwapIndex]] = [
          this.heap[toSwapIndex],
          this.heap[index],
        ];
        bubbleDown(toSwapIndex);
      }
    };
    bubbleDown(0);
    return extractedVal.val;
  }
}

const maxPriorityQueue = new MaxPriorityQueue();

console.log(maxPriorityQueue.enqueue("common cold", 1));
console.log(maxPriorityQueue.enqueue("gunshot wound", 5));
console.log(maxPriorityQueue.enqueue("high fever", 2));
console.log(maxPriorityQueue.enqueue("broken arm", 4));
console.log(maxPriorityQueue.enqueue("glass in foot", 3));
// console.log(maxPriorityQueue.enqueue("glass in foot", 3));
// console.log(maxPriorityQueue.enqueue("glass in foot", 3));

// console.log(maxPriorityQueue.dequeue());
// console.log(maxPriorityQueue.dequeue());
// console.log(maxPriorityQueue.dequeue());
// console.log(maxPriorityQueue.dequeue());
// console.log(maxPriorityQueue.dequeue());
// console.log(maxPriorityQueue.dequeue());
// console.log(maxPriorityQueue.dequeue());
// console.log(maxPriorityQueue.dequeue());

console.log(maxPriorityQueue.heap);
