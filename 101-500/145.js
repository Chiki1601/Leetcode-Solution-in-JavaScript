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
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// looks like there is a better way to implement
var postorderTraversal = function(root) {
    var result = [];
    if (!root) return result;
    var stack = [root];
    var preVisitedNode = null;

    while (stack.length > 0) {
        node = stack[stack.length - 1];
        if (!node.left && !node.right ||
            (preVisitedNode && (preVisitedNode === node.right || preVisitedNode === node.left))) {
            result.push(node.val);
            preVisitedNode = stack.pop();
        } else {
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
        }
    }

    return result;
};
