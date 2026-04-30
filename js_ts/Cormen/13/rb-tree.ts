type RBElement = {
  color: "red" | "black";
  key: number;
  p: RBElement;
  left: RBElement;
  right: RBElement;
} | null;

type RBTree = {
  root: RBElement;
};

const TNil: RBElement = {
  color: "black",
  key: null,
  p: null,
  left: null,
  right: null,
};

function leftRotate(T: RBTree, x: RBElement) {
  if (!x || !x.right) {
    return;
  }

  let y = x.right;
  x.right = y.left;

  if (y.left !== TNil) {
    y.left.p = x;
  }

  y.p = x.p;
  if (x.p === TNil) {
    T.root = y;
  } else if (x === x.p.left) {
    x.p.left = y;
  } else {
    x.p.right = y;
  }

  y.left = x;
  x.p = y;
}

function rightRotate(T: RBTree, x: RBElement) {
  if (!x || !x.left) {
    return;
  }

  let y = x.left;
  x.left = y.right;

  if (y.right !== TNil) {
    y.right.p = x;
  }

  y.p = x.p;
  if (x.p === TNil) {
    T.root = y;
  } else if (x === x.p.left) {
    x.p.left = y;
  } else {
    x.p.right = y;
  }

  y.right = x;
  x.p = y;
}

function rbTreeInsert(T: RBTree, z: RBElement): RBTree {
  if (!z) {
    return T;
  }

  let y: RBElement = TNil;
  let x = T.root;

  while (x !== TNil) {
    y = x;
    if (z.key < x.key) {
      x = x.left;
    } else {
      x = x.right;
    }
  }

  z.p = y;
  if (y === TNil) {
    T.root = z;
  } else if (z.key < y.key) {
    y.left = z;
  } else {
    y.right = z;
  }

  z.left = TNil;
  z.right = TNil;
  z.color = "red";
  rbTreeInsertFixup(T, z);

  return T;
}

function rbTreeInsertFixup(T: RBTree, z: RBElement) {
  if (!z) return;

  while (z.p?.color === "red") {
    if (z.p == z.p.p?.left) {
      let y = z.p.p?.right;
      if (y && y.color === "red") {
        z.p.color = "black";
        y.color = "black";
        z.p.p.color = "red";
        z = z.p.p;
      } else {
        if (z == z.p.right) {
          z = z?.p;
          leftRotate(T, z);
        }
				z.p.color = 'black';
				z.p.p.color = 'red';
				rightRotate(T, z.p.p);
      }
    } else {
			let y = z.p.p?.left;
      if (y && y.color === "red") {
        z.p.color = "black";
        y.color = "black";
        z.p.p.color = "red";
        z = z.p.p;
      } else {
        if (z == z.p.left) {
          z = z?.p;
          rightRotate(T, z);
        }  
				z.p.p.color = 'red';
				leftRotate(T, z.p.p);
      }
		}
  }

	T.root.color = 'red';
}

export {};
