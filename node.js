function Analysis(str){
    for (let i=0; i <str.length; i++){
        if (str[i]>= '0' && str[i] <= '9') {
            return i;
         } 
     }
     return -1;
}

console.log(Analysis("Stanl8ey"))