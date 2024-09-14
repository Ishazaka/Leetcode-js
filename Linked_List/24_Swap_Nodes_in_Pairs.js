
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
  let dummy = new ListNode(0)
   dummy.next = head

    let point = dummy

   while(point.next != null && point.next.next != null ){
    let swap1 = point.next;
    let swap2 = point.next.next; 

       swap1.next = swap2.next;
       swap2.next = swap1

       point.next = swap2;
       point = swap1

   }
   return dummy.next  

};
