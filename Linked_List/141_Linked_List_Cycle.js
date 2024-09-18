/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
     
    let fast = head;
let slow = head;

while(fast && fast.next){
    fast = fast.next.next;
    slow = slow.next


    if(fast== slow) return true

}

return false
     
};

// 2nd Solution whcih took more memory and more time , 

// here we are setting a unique identifier (100001) to a value which are visitign, so the next time when we will visit this value, we will know that it is already visited with this unique identifier, which helps us to detect that there is a cycle in linked list


var hasCycle = function(head) {
    while (head) {
        if (head.val === 100001) return true;

        head.val = 100001;
        head = head.next;
    }

    return false;
};


