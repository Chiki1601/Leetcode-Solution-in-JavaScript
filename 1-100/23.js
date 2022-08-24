/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return lists;
    if (lists.length === 1) return lists[0];
    if (lists.length === 2) return mergeTwoLists(lists[0], lists[1]);
    var listNums = lists.length;
    var firstHalf = lists.slice(0, Math.floor(listNums / 2));
    var secondHalf = lists.slice(Math.floor(listNums / 2), listNums);
    return mergeTwoLists(mergeKLists(firstHalf), mergeKLists(secondHalf));
};

var mergeTwoLists = function(l1, l2) {
    var l3 = new ListNode();
    var l3Head = l3;
    while (l1 && l2) {
        if (l1.val <= l2.val ) {
            l3.next = l1;
            l1 = l1.next;
        } else {
            l3.next = l2;
            l2 = l2.next;
        }
        l3 = l3.next;
    }
    if (!l1) l3.next = l2;
    if (!l2) l3.next = l1

    return l3Head.next;
};
