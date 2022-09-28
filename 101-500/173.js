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
 */
var BSTIterator = function(root) {
    this.stack = [];
    this.pushStack(root);
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0 ? true : false;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    var small = this.stack.pop();
    if (small.right) {
        this.pushStack(small.right);
    }
    return small.val;
};

BSTIterator.prototype.pushStack = function(node) {
    while (node) {
        this.stack.push(node);
        node = node.left;
    }
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
