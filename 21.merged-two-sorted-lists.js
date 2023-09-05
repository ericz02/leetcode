/*
  LeetCode: 21. Merge Two Sorted Lists
  https://leetcode.com/problems/merge-two-sorted-lists/
*/

/*
  using a recursive approach
*/

var mergeTwoLists = function (list1, list2) {
  // first check if list1 is null, if so return list2
  if (!list1) return list2;
  // check if list2 is null, if so return list1
  if (!list2) return list1;
  
  // check if list1.val is less than list2.val
  // if so, set list1.next to the result of calling mergeTwoLists with list1.next and list2
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else { // otherwise, set list2.next to the result of calling mergeTwoLists with list1 and list2.next
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
