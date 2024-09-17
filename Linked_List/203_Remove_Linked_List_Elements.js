
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    let dummy  = new ListNode(-1)
    dummy.next = head
     let prev = dummy
     let cur = head


     while(cur){
        if(cur.val == val){
             prev.next = cur.next
             cur = cur.next

        }else{
            prev = cur
            cur = cur.next
        }
     }

   return dummy.next;
};
