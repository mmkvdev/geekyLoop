// reversing a level order is a piece of cake, if we use an array to embed the elements from each level and finally reversing the array.

// level order uses a Breadth First Traversal Approach


class Node {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

// Top-Down Approach
const levelOrder = (root) => {
    let height_binary_tree = height(root);
    for (let i = 1; i <= height_binary_tree; i++) {
        getLevel(root, i);
    }
};

// Bottom-Up Approach
const levelOrderBottom = (root) => {
    let height_binary_tree = height(root);
    let reverse_array = []
    for(let i = 1;i <= height_binary_tree; i++) {
        reverse_array.push(getLevel(root,i));
    }

    return reverse_array.reverse();
}

const height = (root) => {
    if (root === null) return 0;
    else {
        let lheight = height(root.left);
        let rheight = height(root.right);

        return (lheight > rheight) ? (lheight + 1) : (rheight + 1);
    }
}

const getLevel = (root, level, depth_ele = []) => {
    if (root === null) return;
    if (level === 1) depth_ele.push(root.val);
    else if (level > 1) {
        getLevel(root.left, level - 1,depth_ele);
        getLevel(root.right, level - 1,depth_ele);
    }
    return depth_ele;
}

/*
                 1
            2         3
         4     5    6   7

*/

const main = () => {
    root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.left = new Node(6);
    root.right.right = new Node(7);

    // level order
    levelOrderBottom(root);
}

main();
