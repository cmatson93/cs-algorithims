function makeGrade(grades) {
    for (let i = 0; i<grades.length; i++){
        //  if grade is less than < 40 leave as is
        // else 
            // if difference between grade and next mult of 5 < 3 round to mult
    
            /* 
                23
            */ 
            let multFive = Math.ceil(grades[i]/5)*5;
            // console.log("multFive: ", multFive);
            if (multFive - grades[i] < 3 && multFive >= 40){
                console.log(multFive);
            }
            else {
                console.log(grades[i]);
            }
        }
}

makeGrade([73,67,38,33]);