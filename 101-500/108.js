/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var high = nums.length - 1;
    return arrayToBSTHelper(nums, 0, high);
};

var arrayToBSTHelper = function(nums, low, high) {
    if (low > high) return null;
    var mid = low + Math.floor((high - low) / 2);
    var root = new TreeNode(nums[mid]);
    root.left = arrayToBSTHelper(nums, low, mid - 1);
    root.right = arrayToBSTHelper(nums, mid + 1, high);
    return root;
};
