type BinaryElement = {
  key: number;
  p: BinaryElement;
  left: BinaryElement;
  right: BinaryElement;
} | null;

type BinaryTree = {
	root: BinaryElement;
}

function inorderTreeWalk(x: BinaryElement) {
  if (x !== null) {
    inorderTreeWalk(x.left);
    console.log(x.key);
    inorderTreeWalk(x.right);
  }
}

function treeSearch(x: BinaryElement, k: number) {
  if (x === null || k == x.key) {
    return x;
  }

  if (k < x.key) {
    return treeSearch(x.left, k);
  }

  return treeSearch(x.right, k);
}

function treeMinimum(x: BinaryElement) {
  while (x && x.left !== null) {
    x = x.left;
  }
  return x;
}

function treeMaximum(x: BinaryElement) {
	while (x && x.right !== null) {
    x = x.right;
  }
  return x;
}

function treeSuccessor(x: BinaryElement) {
	if (!x) return null;

	if (x.right !== null) {
		return treeMinimum(x.right);
	}

	let y = x.p;
	while (y !== null && x === y.right) {
		x = y;
		y = y.p;
	}
	return y;
}

function treePredecessor(x: BinaryElement) {
	if (!x) return null;

	if (x.left !== null) {
		return treeMaximum(x.left);
	}

	let y = x.p;
	while (y !== null && x === y.left) {
		x = y;
		y = y.p;
	}
	return y;
}

function treeInsert(T: BinaryTree, z: BinaryElement): BinaryTree {
	if (!z) {
		return T;
	}

	let y: BinaryElement = null;
	let x = T.root;

	while (x !== null) {
		y = x;
		if (z.key < x.key) {
			x = x.left;
		} else {
			x = x.right;
		}
	}

	z.p = y;
	if (y === null) {
		T.root = z;
	} else if (z.key < y.key) {
		y.left = z;
	} else {
		y.right = z;
	}

	return T;
}

function transplant(T: BinaryTree, u: BinaryElement, v: BinaryElement) {
	if (!u) return;

	if (u.p === null) {
		T.root = v;
	} else if (u === u.p.left) {
		u.p.left = v;
	} else {
		u.p.right = v;
	}

	if (v !== null) {
		v.p = u.p;
	}
}

function treeDelete(T: BinaryTree, z: BinaryElement) {
	if (!z) return;
	if(z.left === null) {
		transplant(T, z, z.right);
	} else if (z.right === null) {
		transplant(T, z, z.left);
	} else {
		let y = treeMinimum(z.right);
		if (y) {
			if (y.p !== z) {
				transplant(T, y, y.right);
				y.right = z.right;
				y.right.p = y;
			}
			transplant(T, z, y);
			y.left = z.left;
			y.left.p = y;
		}
	}
}

export {};
