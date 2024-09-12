/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    
       node.val = node.next.val
       node.next = node.next.next


};


//Explanation:  We are storing the next node value into this node value and then just linking this node to the node.next.next 
// in this way, we will remvoe the node.next becuase we have store this value into the node which we have access
// no need to return anything
