/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
   let map = new Map()
    let arr = s.split(" ")
 
         if(arr.length != pattern.length){
            return false
         }

      for(let i =0; i < pattern.length; i++){
      let char =  pattern.charAt(i)
      let word = arr[i]

         if(map.has(char) && map.get(char) !== word || !map.has(char) && Array.from(map.values()).includes(word)){
            return false
         }
        map.set(char , word)
      }
    return true
};
