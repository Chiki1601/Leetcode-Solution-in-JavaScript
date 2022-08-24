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
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var results = [];
    helper(root, 0, results);
    return results;
};

var helper = function(node, level, results) {
    if (!node) return results;
    if (level >= results.length) {
        // insert level result array reversely
        results.unshift([]);
    }
    results[results.length - level - 1].push(node.val);
    helper(node.left, level + 1, results);
    helper(node.right, level + 1, results);
};
