/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var stack = [];
    var order = [];
    while (stack.length > 0 || root) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            var node = stack.pop();
            order.push(node.val);
            if (node.right) root = node.right;
        }
    }

    return order;
};
