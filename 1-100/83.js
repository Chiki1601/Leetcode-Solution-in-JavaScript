/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
  var origHead = head;
  while (head !== null && head.next !== null) {
    if (head.next.val === head.val) {
      var headNextNext = head.next.next;
      head.next = headNextNext;
    } else {
      head = head.next;
    }
  }

  return origHead;
};
