// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Brute Force technique (looping to all the array) time taken O(n of square)
function containsDuplicate(nums) {
    for (let i = 0; i < nums.length - 1; i++) {   // n
        for (let j = i + 1; j < nums.length; j++) { // n
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }
    return false;
}

// sorting technique and then compare this all




// hashmaps and check if the value is not there in maps




console.log(containsDuplicate([1,2,3,1]))   // true
console.log(containsDuplicate([1,2,3,4]))   // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))   //true
