// inorder is a depth first approach

class Node {
    constructor(val, left, right) {
        this.val = (val === undefined ? null : val);
        this.left = (val === undefined ? null : left);
        this.right = (val === undefined ? null : right);
    }
}

var preorderTraversal = function (root) {
    return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : [];
};
/*
                    1
                2       3
              4   5   6   7
*/
const main = () => {
    /*root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.left = new Node(6);
    root.right.right = new Node(7);*/

    root = new Node(1);
    root.right = new Node(2);
    root.right.left = new Node(3);

    console.log(inOrder(root));
    // console.log(root);
}

main();
