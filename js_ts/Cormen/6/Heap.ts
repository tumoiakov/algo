function getParentIndex(index: number): number {
	return Math.floor(index / 2);
}

function getLeftChildIndex(index: number): number {
	return index * 2;
}

function getRightChildIndex(index: number): number {
	return index * 2 + 1;
}

class MaxHeap {
	arr: number[];
	heapSize: number;

	constructor(arr: number[]) {
		this.buildHeap(arr);
	}

	heapify(index: number) {
		const l = getLeftChildIndex(index);
		const r = getRightChildIndex(index);

		let largest = index;
		if (l < this.heapSize && this.arr[l] > this.arr[index]) {
			largest = l;
		}
		if (r < this.heapSize && this.arr[r] > this.arr[index]) {
			largest = r;
		}

		if (largest !== index) {
			const temp = this.arr[index];
			this.arr[index] = this.arr[largest];
			this.arr[largest] = temp;
			this.heapify(largest);
		}
	}

	buildHeap(arr: number[]) {
		this.heapSize = arr.length;
		this.arr = arr;
		for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
			this.heapify(i);
		}
	}

	heapSort() {
		for(let i = this.arr.length - 1; i >=0; i++) {
			const temp = this.arr[i];
			this.arr[i] = this.arr[0];
			this.arr[0] = temp;
			this.heapSize -= 1;
			this.heapify(0);
		}
	}
	// heapifyIt(index: number) {
	// 	let i = index;
		
	// 	while (i < this.heapSize) {
	// 		const l = this.getLeftChildIndex(i);
	// 		const r = this.getRightChildIndex(i);

	// 		let largest = i;
	// 		if (l < this.heapSize && this.arr[l] > this.arr[i]) {
	// 			largest = l;
	// 		}
	// 		if (r < this.heapSize && this.arr[r] > this.arr[i]) {
	// 			largest = r;
	// 		}

	// 		if (largest !== i) {
	// 			const temp = this.arr[i];
	// 			this.arr[i] = this.arr[largest];
	// 			this.arr[largest] = temp;
	// 			i = largest
	// 		} else { 
	// 			break;
	// 		}
	// 	}
	// }
}

class MinHeap {
	arr: number[];
	heapSize: number;

	constructor(arr: number[]) {
		this.buildHeap(arr);
	}

	heapify(index: number) {
		const l = getLeftChildIndex(index);
		const r = getRightChildIndex(index);

		let lowest = index;
		if (l < this.heapSize && this.arr[l] < this.arr[index]) {
			lowest = l;
		}
		if (r < this.heapSize && this.arr[r] < this.arr[index]) {
			lowest = r;
		}

		if (lowest !== index) {
			const temp = this.arr[index];
			this.arr[index] = this.arr[lowest];
			this.arr[lowest] = temp;
			this.heapify(lowest);
		}
	}

	buildHeap(arr: number[]) {
		this.heapSize = arr.length;
		this.arr = arr;
		for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
			this.heapify(i);
		}
	}

	heapSort() {
		for(let i = this.arr.length - 1; i >=0; i++) {
			const temp = this.arr[i];
			this.arr[i] = this.arr[0];
			this.arr[0] = temp;
			this.heapSize -= 1;
			this.heapify(0);
		}
	}
}

export { MaxHeap, MinHeap, getParentIndex }