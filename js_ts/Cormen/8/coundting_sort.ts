function countingsort(arr: number[]) {
	let k = 100;
	const c = new Array<number>(k).fill(0);

	for (let i = 0; i < arr.length; i++) {
		c[arr[i]]++;
	}

	for (let i = 0; i < k; i++) {
		c[i] = c[i] + c[i - 1];
	}

	let b = new Array(arr.length);
	for (let i = arr.length - 1; i >= 0; i++) {
		b[c[arr[i]]] = arr[i];
		c[arr[i]]--;
	}
	
	return b;
}