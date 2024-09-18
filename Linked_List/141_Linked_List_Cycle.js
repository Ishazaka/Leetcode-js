var hasCycle = function(head) {
    let slowPTR = head;
   let fastPTR = head;

    while(fastPTR && fastPTR.next){
        slowPTR = slowPTR.next;
        fastPTR = fastPTR.next.next


          if(slowPTR == fastPTR){
        return true
     }
    }

      return false;   
};

let head = [3,2,0,-4]
console.log(hasCycle(head))



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


