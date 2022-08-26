/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return null;
    while (head && head.val === val) head = head.next;
    var headCopy = head;
    var prev = head;
    while (head) {
        head = head.next;
        if (head && head.val === val) prev.next = head.next;
        else prev = head;
    }

    return headCopy;
};
