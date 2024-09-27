
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
     if(root == null){
        return null
     }
     root.left = pruneTree(root.left);
     root.right = pruneTree(root.right);

    if(root.right == null && root.left == null && root.val == 0){
        return null;
    }
        return root;     
};
