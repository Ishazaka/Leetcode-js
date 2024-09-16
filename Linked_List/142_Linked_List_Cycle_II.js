//142. Linked List Cycle II


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
      
    let fast = head;
    let slow = head;

   let pointer = head;

    if(!head) return null;
    if(!head.next) return null;

   while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
      if(fast === slow) break;

   }
   if(fast != slow) return null

     
   while(pointer !== slow){
      pointer = pointer.next;
      slow = slow.next
   }  

return slow;

};

// 2nd solution which took 51 ms


var detectCycle = function(head) {
    if(head==null||head.next==null)
        return null;
    let slow=head;
    let fast=head;
    let entry = head;
    
    while(fast!=null&&fast.next!=null)
    {
        fast = fast.next.next;
        slow =slow.next;
        if(fast==slow)
        {
            while(slow!=entry)
            {
                slow = slow.next;
                entry=entry.next;
            }
            return entry;
        }
    }
    return null;
};
