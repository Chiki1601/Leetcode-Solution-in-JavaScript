/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;
    var headCopy = head;
    var first = head;
    var second = head;
    var i = 1;
    while (first.next) {
        first = first.next;
        i++;
    }
    var j = i - k % i;
    // if the steps eqauls to i (the length) return original list.
    if (j === i) return head;

    while (j > 1) {
        second = second.next;
        j--;
    }
    head = second.next;
    second.next = first.next;
    first.next = headCopy;

    return head;
};
