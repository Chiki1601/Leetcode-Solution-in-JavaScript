var isEvenOddTree = function(root) {
    if (!root) {
        return true;
    }

    let queue = [root];
    let level = 0;

    while (queue.length > 0) {
        let size = queue.length;
        let prevVal = (level % 2 === 0) ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            // Check if the values follow the conditions
            if ((level % 2 === 0 && (node.val % 2 === 0 || node.val <= prevVal)) ||
                (level % 2 === 1 && (node.val % 2 === 1 || node.val >= prevVal))) {
                return false;
            }

            prevVal = node.val;

            // Add children to the queue
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        level++;
    }

    return true;
};
