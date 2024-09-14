
a solution for O(m + n) time and use only O(1) memory

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    if(headA === null) return headA
    if(headB === null) return headB
    
   let totalA =  countLength(headA);
   let totalB =   countLength(headB);


    while(totalA > totalB){
        totalA--
       headA = headA.next
    }

    while(totalB > totalA){
        totalB--
        headB = headB.next
    }

     while(headA != headB){
        headA = headA.next;
        headB = headB.next
     }
   return headA
    


function countLength(head){
   let count = 0;
     while(head != null){
        count++
      head = head.next
     }
     return count
}



};
