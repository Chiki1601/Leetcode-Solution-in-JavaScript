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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(!root) return true;
  return dfs(root.left, root.right);
};

function dfs(s, t){
  if(!s && !t) return true;
  if(!s || !t) return false;
  if(s.val !== t.val) return false;
  
  return dfs(s.left, t.right) && dfs(s.right, t.left)
}
