/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

var helper = function(preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) return null;
    var k = 0;
    for (var i = 0, length = inorder.length; i < length; i++) {
        if(preorder[preStart] === inorder[i]) {
            k = i;
            break;
        }
    }

    var root = new TreeNode(preorder[preStart]);
    // make sure inEnd - inStart === preEnd - preStart
    root.left = helper(preorder, preStart + 1, preStart + k - inStart, inorder, inStart, k - 1);
    root.right = helper(preorder, preEnd - inEnd + k + 1, preEnd, inorder, k + 1, inEnd);

    return root;
};
