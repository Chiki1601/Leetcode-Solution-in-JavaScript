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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var results = [];
    helper(results, root, 0);
    return results;
};

var helper = function(results, node, level) {
    if (!node) return results;
    if (level >= results.length) {
        results[level] = [];
    }
    if (level % 2 === 0) {
        results[level].push(node.val);
    } else {
        results[level].unshift(node.val);
    }

    helper(results, node.left, level + 1);
    helper(results, node.right, level + 1);
};
