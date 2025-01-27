/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
function checkIfPrerequisite(numCourses, prerequisites, queries) {
    // Initialize outgoing edges
    const outs = new Array(numCourses);
    for (let i = 0; i < numCourses; ++i) {
        outs[i] = [];
    }

    // Populate indegrees and outgoing edges
    const ins = new Uint8Array(numCourses);
    for (let i = 0; i < prerequisites.length; ++i) {
        ++ins[prerequisites[i][1]];
        outs[prerequisites[i][0]].push(prerequisites[i][1]);
    }

    // Populate prerequisite matrix
    const matrix = new Array(numCourses).fill([]);
    for (let i = 0; i < numCourses; ++i) {
        if (ins[i] == 0 && matrix[i].length == 0) {
            matrix[i] = new Array(numCourses).fill(false);
            dfs(ins, outs, matrix, i);
        }
    }

    // Populate answers
    const answer = new Array(queries.length);
    for (let i = 0; i < queries.length; ++i) {
        answer[i] = matrix[queries[i][1]][queries[i][0]] == true;
    }

    return answer;
};

/**
 * @param {Uint8Array} ins
 * @param {number[][]} outs
 * @param {boolean[][]} matrix
 * @param {number} vertex
 */
function dfs(ins, outs, matrix, vertex) {
    for (const next of outs[vertex]) {
        if (matrix[next].length == 0) {
            matrix[next] = Array.from(matrix[vertex]);
        } else {
            matrix[next] = mergeRows(matrix[next], matrix[vertex]);
        }
        matrix[next][vertex] = true;
        if (--ins[next] == 0) {
            dfs(ins, outs, matrix, next);
        }
    }
}

/**
 * @param {Uint8Array} target
 * @param {number[][]} source
 * @param {boolean[][]} matrix
 * @param {boolean[]} vertex
 */
function mergeRows(target, source) {
    const N = source.length;
    for (let i = 0; i < N; ++i) {
        target[i] ||= source[i];
    }
    return target;
}
