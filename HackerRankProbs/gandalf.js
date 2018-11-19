function minPower(p) {
    var startPower = 1;
    var gandalfPower = startPower; 

    // console.log("Min Power ");
    function calculatePower(gp, numbers){
        // console.log("Inside calculate power..");
        // console.log("....gp ", gp);
        // console.log("numbers; ", numbers.length);

        for (let i = 1; i<numbers.length; i++){
            // console.log("i ", i);
            // console.log(`Addition :  ${gp} + ${numbers[i]} `);
            gp = gp + numbers[i];
            // console.log("Result is =  ", gp);

            // console.log("numbers: ", numbers);
            // console.log("___numbers[i]___", numbers[i])
            if (gp < 1){
                // console.log("gp < 1... recursing...")
                startPower = startPower + 1;
                gandalfPower = startPower;
                calculatePower(gandalfPower, p);
                break;
            }
        }
    }

    calculatePower(gandalfPower, p);
    console.log("Start Power at End: ", startPower);

}

var pArray = [5, -5, 4, -2, 3, 1];
var harder = [10, -5, 4, -2, 3, 1, -1, -6, -1, 0, -5]
minPower(harder)