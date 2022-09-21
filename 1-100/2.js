/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode();
    var p3 = l3;
    var addOne = false;
    var digitSum = 0;

    while (l1 || l2) {
        var l1Digit = 0;
        var l2Digit = 0;
        if (l1) l1Digit = l1.val;
        if (l2) l2Digit = l2.val;
        if (addOne) {
            digitSum = l1Digit + l2Digit + 1;
        } else {
            digitSum = l1Digit + l2Digit;
        }

        if (digitSum > 9) {
            digitSum -= 10;
            addOne = true;
        } else {
            addOne = false;
        }

        var node = new ListNode(digitSum);
        l3.next = node;
        l3 = node;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (addOne) {
        var node = new ListNode(1);
        l3.next = node;
    }

    return p3.next;
};
