/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = function(head) {
  let slow = head, fast = head
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  // reverse
  let next = null, pre = null
  while(slow) {
    next = slow.next
    slow.next = pre
    pre = slow
    slow = next
  }

  let res = 0
  while(pre) {
    res = Math.max(res, pre.val + head.val)
    pre = pre.next
    head = head.next
  }
  
  return res
};
