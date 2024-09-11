
// we have to remove that node, we dont have access to the head so we can tracerse the liked list, so we will store the data of next node in this current node, and remove the next easily, for that we just have to link this current node to node.next.next

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
    
      let next =  node.next.next
      node.val  =   node.next.val
           node.next =  next

};
