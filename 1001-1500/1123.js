var lcaDeepestLeaves = function(root) {
    const dfs = (node) => {
        if (!node) return [0, null];

        const [leftDepth, leftLCA] = dfs(node.left);
        const [rightDepth, rightLCA] = dfs(node.right);

        if (leftDepth === rightDepth) {
            return [leftDepth + 1, node];
        } else if (leftDepth > rightDepth) {
            return [leftDepth + 1, leftLCA];
        } else {
            return [rightDepth + 1, rightLCA];
        }
    };

    return dfs(root)[1];
};
