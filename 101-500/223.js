/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var areaA = (C-A) * (D-B);
    var areaB = (G-E) * (H-F);

    var left = Math.max(A, E);
    var right = Math.min(C, G);
    var top = Math.min(D, H);
    var bottom = Math.max(B, F);

    var overlapArea = 0;
    if (right > left && top > bottom) {
        overlapArea = (right -left) * (top - bottom);
    }

    return areaA + areaB - overlapArea;
};
