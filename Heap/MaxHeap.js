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
}

const maxHeap = new MaxHeap();
console.log(maxHeap.insert(41));
console.log(maxHeap.insert(39));
console.log(maxHeap.insert(33));
console.log(maxHeap.insert(18));
console.log(maxHeap.insert(27));
console.log(maxHeap.insert(12));
console.log(maxHeap.insert(55));
console.log(maxHeap.insert(55));
console.log(maxHeap.insert(55));
console.log(maxHeap.insert(45));
console.log(maxHeap.insert(1));
