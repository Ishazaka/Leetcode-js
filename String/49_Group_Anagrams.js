function groupAnagrams(strs) {

    if(!strs || strs.length == 1) return [strs];
 
        const map = new Map();
 
         for(const ss in strs){
          const key =  ss.split('').sort().join("")
 
             if(map.has(key)){
                 map.get(key).push(ss)
             }else{
                 map.set(key, [ss])
             }
         }
       
            return map;
 
     }
