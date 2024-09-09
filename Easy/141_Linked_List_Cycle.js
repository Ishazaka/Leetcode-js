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
    let slowPTR = head;
   let fastPTR = head;

    while(slowPTR != null && fastPTR != null && fastPTR.next != null){
        slowPTR = slowPTR.next;
        fastPTR = fastPTR.next.next


          if(slowPTR == fastPTR){
        return true
     }
    }

      return false;   
};
