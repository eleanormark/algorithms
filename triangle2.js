var getRow = function(rowIndex) {
    let res = new Array(rowIndex+1).fill(1);
   
   for(let i = 1; i < rowIndex; i++){
       for(let j = i; j >= 1; j--){
           res[j] += res[j-1];
       }
   }
   
   return res;
   
};