/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
     
 
   const map = {};

    for(const num of nums){
        if (!map[num]) map[num] = 0
          map[num]++
    }

     return [...Object.keys(map)].sort((a, b) => map[a] - map[b] ).slice(-k)

  

};
