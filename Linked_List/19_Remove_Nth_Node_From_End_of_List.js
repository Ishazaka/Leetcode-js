
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
    const dummy = new ListNode(-1);
          dummy.next = head

     let leftPtr = dummy;
     let rightPtr = dummy;
       
        for(let i  =0; i < n; i++){
            rightPtr = rightPtr.next;
        }
     
     while(rightPtr.next != null){
        leftPtr = leftPtr.next;
        rightPtr = rightPtr.next;

     }

      leftPtr.next = leftPtr.next.next;

      return dummy.next;

    }
}
