/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {

    const queue = [root];
    let leftmostValue;

    while (queue.length > 0) {
        const node = queue.shift();

        leftmostValue = node.val;

        if (node.right) {
            queue.push(node.right);
        }
        if (node.left) {
            queue.push(node.left);
        }
    }

    return leftmostValue;
};
