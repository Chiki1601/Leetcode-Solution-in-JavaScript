//86. Leetcode Solution in JavaScript
var partition = function(head, x) {
    let fdum = new ListNode(0), bdum = new ListNode(0),
        front = fdum, back = bdum, curr = head
    while (curr) {
        if (curr.val < x)front.next = curr, front = curr
        else back.next = curr, back = curr
        curr = curr.next
    }
    front.next = bdum.next, back.next = null
    return fdum.next
};
