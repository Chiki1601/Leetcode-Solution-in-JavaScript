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
var preorderTraversal = function(root) {
    var rightNodes = [];
    var order = [];
    while (root || rightNodes.length > 0) {
        if (root) {
            order.push(root.val);
            if (root.right) rightNodes.push(root.right);
            root = root.left;
        } else {
          root = rightNodes.pop();
        }
    }
    return order;
};
    
