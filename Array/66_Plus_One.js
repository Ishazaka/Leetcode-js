var plusOne = function(digits) {

     for(let i = digits.length - 1; i >= 0 ; i-- ){
          if(digits[i] == 9){
            digits[i] = 0
          }else{
            digits[i]++
            return digits
          }
     } 
    let arr  = new Array(digits.length + 1).fill(0);
    arr[0] = 1;
    return arr;  

};
