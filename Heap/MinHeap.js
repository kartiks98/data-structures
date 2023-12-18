class MinxHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    const bubbleUp = (index) => {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] < this.heap[parentIndex]) {
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

  extractMin() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    const extractedVal = this.heap.pop();
    if (!extractedVal) return "Heap is empty";
    const bubbleDown = (index) => {
      const childIndexes = [2 * index + 1, 2 * index + 2];
      const isSwap =
        this.heap[index] > this.heap[childIndexes[0]] ||
        this.heap[index] > this.heap[childIndexes[1]];
      if (isSwap) {
        const toSwapIndex =
          this.heap[childIndexes[0]] < (this.heap[childIndexes[1]] || Infinity)
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
    return extractedVal;
  }
}

const MinHeap = new MinxHeap();
// console.log(MinHeap.insert(41));
// console.log(MinHeap.insert(39));
// console.log(MinHeap.insert(33));
// console.log(MinHeap.insert(1));
// console.log(MinHeap.insert(18));
// console.log(MinHeap.insert(27));
// console.log(MinHeap.insert(12));
// console.log(MinHeap.insert(55));
// console.log(MinHeap.insert(55));
// console.log(MinHeap.insert(55));
// console.log(MinHeap.insert(45));

console.log(MinHeap.insert(41));
console.log(MinHeap.insert(39));
console.log(MinHeap.insert(33));
console.log(MinHeap.insert(18));
console.log(MinHeap.insert(27));
console.log(MinHeap.insert(12));
console.log(MinHeap.insert(55));
// console.log(MinHeap.insert(1));
// console.log(MinHeap.insert(45));
// console.log(MinHeap.insert(199));

// console.log(MinHeap.extractMin());
// console.log(MinHeap.extractMin());
// console.log(MinHeap.extractMin());
// console.log(MinHeap.extractMin());
// console.log(MinHeap.extractMin());
// console.log(MinHeap.extractMin());
// console.log(MinHeap.extractMin());
// console.log(MinHeap.extractMin());
// console.log(MinHeap.extractMin());

console.log(MinHeap.heap);
