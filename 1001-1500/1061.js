var smallestEquivalentString = function(A, B, S) {
    const set = new DisjointSet()
    
    for (let i = 0; i < A.length; i++) {
        const aPos = posForChar(A[i])
        const bPos = posForChar(B[i])
        set.union(aPos, bPos)
    }
    
    const result = []
    for (const char of S) {
        const sPos = posForChar(char)
        const parent = set.find(sPos)
        result.push(charForPos(parent))
    }
    
    return result.join('')
};

class DisjointSet {
    constructor() {
        this.parent = []
        for (let i = 0; i < 26; i++)
            this.parent[i] = i
    }
    
    find(p) {
        let root = p
        while (root !== this.parent[root])
            root = this.parent[root]
        
        while (p !== root) {
            const next = this.parent[p]
            this.parent[p] = root
            p = next
        }
        
        return root
    }
    
    union(p, q) {
        const rootP = this.find(p)
        const rootQ = this.find(q)
        
        if (rootP === rootQ) return
        
        if (rootP > rootQ) {
            this.parent[rootP] = rootQ
        } else {
            this.parent[rootQ] = rootP
        }
    }
}

const posForChar = char => char.charCodeAt(0) - 'a'.charCodeAt(0)
const charForPos = pos => String.fromCharCode(pos + 'a'.charCodeAt(0))
