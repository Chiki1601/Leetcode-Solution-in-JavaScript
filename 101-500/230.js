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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var stack = [];
    var node = root;

    while (node || stack.length > 0) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            k--;
            if (k === 0) return node.val;
            node = node.right;
        }
    }
};
