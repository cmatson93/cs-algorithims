function makeStaircase(stairCount){
    let string = "";

    for(let i = 1; i <= stairCount; i++){
        string = " ".repeat(stairCount - i);
        string = string + "#".repeat(i);
        console.log(string);
    }
    
}

makeStaircase(6);


/*
     #
    ##
   ###
  ####
 #####
######

*/