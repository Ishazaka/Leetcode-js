
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        return this.dfs(root)[0] === 1;
    }

    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    dfs(root) {
        if (!root) {
            return [1, 0];
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);

        const balanced =
            left[0] === 1 &&
            right[0] === 1 &&
            Math.abs(left[1] - right[1]) <= 1;
        const height = 1 + Math.max(left[1], right[1]);

        return [balanced ? 1 : 0, height];
    }
}
