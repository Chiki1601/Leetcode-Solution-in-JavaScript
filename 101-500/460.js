var LFUCache = function(capacity) {
    
    this.capacity = capacity;
    this.map = new Map();
    this.start = null;
    
    function addFirst(key, val) {

        let newNode = new Node(key, val);

        if (this.start == null) {
            
            this.start = newNode;
        } else {
            
            newNode.next = this.start;
            this.start.prev = newNode;
            this.start = newNode;
        }
        
        this.map.set(key, newNode);
    }
    
    function removeLFUNode() {
                
        let minNode = this.start;
        let node = this.start.next;
        while (node != null) {
            
            if (node.count <= minNode.count) {
                
                minNode = node;
            }
            
            node = node.next;
        }
        
        if (minNode.prev == null) {
            
            this.start = this.start.next;
        } else {
            
            let prev = minNode.prev;
            let next = minNode.next;
            
            prev.next = next;
            
            if (next != null) {
                
                next.prev = prev;
            }
        }
        
        this.map.delete(minNode.key);
    }
    
    function moveNodeToFirst(node) {
        
        if (node == this.start) return;
        
        let next = node.next;
        let prev = node.prev;
        
        prev.next = next;
            
        if (next != null) {

            next.prev = prev;
        }
        
        node.next = this.start;
        this.start.prev = node;
        this.start = node;
        node.prev = null;
    }
    
    this.addFirst = addFirst;
    this.removeLFUNode = removeLFUNode;
    this.moveNodeToFirst = moveNodeToFirst;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    
    if (this.capacity == 0) return -1;
    
    if (this.map.has(key)) {
        
        let node = this.map.get(key);
        ++node.count;
        this.moveNodeToFirst(node);
        return node.val;
    }
    
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    
    if (this.capacity == 0) return;
    
    if (this.map.has(key)) {
    
        let node = this.map.get(key);
        node.val = value;
        this.get(key);
        return;
    }
        
    if (this.map.size == this.capacity) {
        
        this.removeLFUNode();
    } 
        
    this.addFirst(key, value);
};

function Node(key, val) {

    this.count = 1;
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
};
