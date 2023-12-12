class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    const bubbleUp = (index) => {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] > this.heap[parentIndex]) {
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

  extractMax() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    const extracteedVal = this.heap.pop();
    const bubbleDown = (index) => {
      const childIndexes = [2 * index + 1, 2 * index + 2];
      const isSwap =
        this.heap[index] < this.heap[childIndexes[0]] ||
        this.heap[index] < this.heap[childIndexes[1]];
      if (isSwap) {
        const toSwapIndex =
          this.heap[childIndexes[0]] > this.heap[childIndexes[1]]
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
    return extracteedVal;
  }
}

const maxHeap = new MaxHeap();
// console.log(maxHeap.insert(41));
// console.log(maxHeap.insert(39));
// console.log(maxHeap.insert(33));
// console.log(maxHeap.insert(1));
// console.log(maxHeap.insert(18));
// console.log(maxHeap.insert(27));
// console.log(maxHeap.insert(12));
// console.log(maxHeap.insert(55));
// console.log(maxHeap.insert(55));
// console.log(maxHeap.insert(55));
// console.log(maxHeap.insert(45));

console.log(maxHeap.insert(41));
console.log(maxHeap.insert(39));
console.log(maxHeap.insert(33));
console.log(maxHeap.insert(18));
console.log(maxHeap.insert(27));
console.log(maxHeap.insert(12));
console.log(maxHeap.insert(55));
console.log(maxHeap.insert(1));
console.log(maxHeap.insert(45));
console.log(maxHeap.insert(199));

console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());

console.log(maxHeap.heap);
