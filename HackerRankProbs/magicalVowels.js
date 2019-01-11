function longestSubsequence(s) {
    let count = 0;

    for (let a=0; a<s.length; a++){
        if (s[a] === "a"){
            count++;
            console.log(`a @ ${a}`);
           for (let e = a + 1; e<s.length; e++){
               if (s[e] === "a"){
                   count++;
                   console.log(`a @ ${a}`);
               } else if (s[e] === "e") {
                   count++;
                   console.log(`e @ ${e}`);
                   for (let i = e + 1; i<s.length; i++){
                       if (s[i] === "e"){
                           count++;
                           console.log(`e @ ${e}`);
                       } else if (s[i] === "i") {
                           count++;
                           console.log(`i 1 @ ${i}`);
                            for (let o = i + 1; o<s.length; o++){
                                if (s[o] === "i"){
                                    console.log(`i 2 @ ${o}`);
                                    count ++;
                                } else if (s[o]=== "o"){
                                    count ++;
                                    console.log(`o1 @ ${o}`);
                                    for (let u= o + 1; u<s.length; u++){
                                        if (s[u] === "o") {
                                            count ++;
                                            console.log(`o 2@ ${u}`);
                                        } else if (s[u] === "u") {
                                            count ++;
                                            console.log(`u @ ${u}`);

                                        }
                                    }
                                    break
                                }
                            }
                           break
                       }
                       
                   }
                   break
               }
               
           }
           break
        }
        break

    }
    console.log(count)
}
const string = "aeiaaioooaauuaeiou";

longestSubsequence(string);


//consecutive sum

/* 

figen a long integer, find the number of ways to represent it as a sum of two or more consecuive positive  integers.

given 15 outsup 3 

 1 2 3 4 5 
 4 5 6
 7 8

given 10 1

*/

//Fizz Buzz