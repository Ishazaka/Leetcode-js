/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {

    if(head === null) return null
    
   let even = head.next
   let odd = head

  let evenhead = even;  
    
     while(even != null && even.next != null){
         odd.next = odd.next.next;
         odd = odd.next

         even.next = even.next.next;
         even = even.next

     }

      odd.next = evenhead


   return head
};
