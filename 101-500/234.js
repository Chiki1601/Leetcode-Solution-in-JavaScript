/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true;
    var fastHead = head;
    var slowHead = head;
    while (fastHead.next && fastHead.next.next) {
        slowHead = slowHead.next;
        fastHead = fastHead.next.next;
    }

    // reverse the scond half
    var center = slowHead.next;
    var centerNext = center.next;
    slowHead.next = null;
    center.next = null;
    while (centerNext) {
        var tmp = centerNext.next;
        centerNext.next = center;
        center = centerNext;
        centerNext = tmp;
    }

    while (head && center) {
        if (head.val !== center.val) return false;
        head = head.next;
        center = center.next;
    }

    return true;
};
