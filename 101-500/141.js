/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false;
    var fast = head;
    var slow = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next
        if (slow === fast) return true;
    }

    return false;
};
