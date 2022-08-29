var largestValues = function(root) {
    var result = [];
    helper(root, result, 0);
    return result;
};

var helper = function(root, res, level) {
    if (!root) {
        return;
    }

    if (res.length === level) {
        res.push(root.val);
    } else {
        res[level] = Math.max(res[level], root.val);
    }

    helper(root.left, res, level + 1);
    helper(root.right, res, level + 1);
}
