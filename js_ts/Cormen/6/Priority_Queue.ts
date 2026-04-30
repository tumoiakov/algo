import { MaxHeap, MinHeap, getParentIndex } from './Heap';

class MaxQueue extends MaxHeap {
	constructor(arr: number[]) {
		super(arr);
	}

	insert(key: number) {
		this.arr[this.heapSize] = -Infinity;
		this.heapSize += 1;
		this.increaseKey(this.heapSize - 1, key);
	}

	maximum(): number {
		return this.arr[0];
	}

	extractMax(): number {
		if (this.heapSize <= 0) {
			throw new Error('Queue is empty');
		}

		const max = this.arr[0];
		this.arr[0] = this.arr[this.heapSize - 1];
		this.heapSize -= 1;
		this.heapify(0);
		return max;
	}

	delete(key: number) {
		if (this.heapSize <= 0) {
			throw new Error('Queue is empty');
		}

		this.arr[key] = this.arr[this.heapSize - 1];
		this.heapSize -= 1;
		this.heapify(key);
	} 

	increaseKey(i: number, key: number) {
		if (key < this.arr[i]) {
			throw new Error('new key is lower then current');
		}
		this.arr[i] = key;

		let parent = getParentIndex(i);
		while (i >= 0 && this.arr[parent] < this.arr[i]) {
			const temp = this.arr[i];
			this.arr[i] = this.arr[parent];
			this.arr[parent] = temp;
		}
	}
}

class MinQueue extends MinHeap {
	constructor(arr: number[]) {
		super(arr);
	}

	insert(key: number) {
		this.arr[this.heapSize] = +Infinity;
		this.heapSize += 1;
		this.decreaseKey(this.heapSize - 1, key);
	}

	minimum(): number {
		return this.arr[0];
	}

	extractMin(): number {
		if (this.heapSize <= 0) {
			throw new Error('Queue is empty');
		}

		const min = this.arr[0];
		this.arr[0] = this.arr[this.heapSize - 1];
		this.heapSize -= 1;
		this.heapify(0);
		return min;
	}

	decreaseKey(i: number, key: number) {
		if (key > this.arr[i]) {
			throw new Error('new key is higher then current');
		}
		this.arr[i] = key;

		let parent = getParentIndex(i);
		while (i >= 0 && this.arr[parent] > this.arr[i]) {
			const temp = this.arr[i];
			this.arr[i] = this.arr[parent];
			this.arr[parent] = temp;
		}
	}
}