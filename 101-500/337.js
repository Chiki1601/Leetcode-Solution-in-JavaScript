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
 * @return {number}
 */
var rob = function(root) {
     var result = robDFS(root);
     return Math.max(result[0], result[1]);
 };

 var robDFS = function(root) {
     if (!root) return [0, 0];
     var result = [];
     var leftResults = robDFS(root.left);
     var rightResults = robDFS(root.right);
     result[0] = root.val + leftResults[1] + rightResults[1];
     result[1] = Math.max(leftResults[0], leftResults[1]) + Math.max(rightResults[0], rightResults[1]);
     return result;
 };
