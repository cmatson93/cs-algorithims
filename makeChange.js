function makeChange(amount, coins) {

    var count = 0;

    for (let i=0; i<coins.length; i++){
        //get each individual coin
        //First Coin: 
        var coin = coins[i];
        console.log("i loop...");
        console.log("i: ", i);
        console.log("coin: ", coin);

        for (let j=0; j<=amount; j++){
            console.log("... j loop...");
            console.log("j: ", j);
            console.log("coin*j = ", coin^j);
            var result = coin ^ j;
            //first coin 0 times
            if (result < amount) {
                console.log("....LESS.....");
                var coin2 = coins[i + 1];

                
            } else if (result === amount) {
                console.log("____EQUAL____");
                count ++;
            }
            else {

                console.log("....Greater....");

            }
           
        }
         

        
        
    }
}




//Should return 3
makeChange(5, [1,2]);

/*

1 * 5 2 * 0 
1 *1 2*2
1 * 3 2 * 1 

1 2 

0 , 
1 
2
3

*/