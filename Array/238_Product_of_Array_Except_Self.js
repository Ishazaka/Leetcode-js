
// Brute Force  
// Time complexity: O(n square)
// Space complexity:O(1)

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n);

        for (let i = 0; i < n; i++) {
            let prod = 1;
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    prod *= nums[j];
                }
            }
            res[i] = prod;
        }
        return res;
    }
}


// Division  
// Time complexity: O(n)
// Space complexity:O(1)

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prod = 1;
        let zeroCount = 0;
        for (let num of nums) {
            if (num !== 0) {
                prod *= num;
            } else {
                zeroCount++;
            }
        }

        if (zeroCount > 1) {
            return Array(nums.length).fill(0); 
        }

        const res = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 0) {
                res[i] = (nums[i] === 0) ? prod : 0;
            } else {
                res[i] = prod / nums[i];
            }
        }
        return res;
    }
}

