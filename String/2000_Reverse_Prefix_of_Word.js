/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    
   let indexCh = word.indexOf(ch)

   if(indexCh === -1){
    return word
   }

   let result = ''

   const stack =  [];
  for(let i = 0; i <= indexCh ; i++){
       stack.push(word.charAt(i))          
    
  }
   while(stack.length > 0){
     result += stack.pop()
   }
 
  result += word.slice(indexCh + 1 )
 
return  result

};
