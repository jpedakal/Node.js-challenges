// What is the role of package-lock.json file ?
/*
https://stackoverflow.com/questions/44297803/what-is-the-role-of-the-package-lock-json 
*/

// What is the difference between module.exports and exports ?
/**
 https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js
 */

 // Find the output of below code
 function main(){
     let cycles= 1000000000;
     let start= Date.now();
     for(let i=0;i<cycles;i++){

     }
     let end= Date.now();
     let duration= ((end-start)/1000);
     console.log("JavaScript looped %d times in %d seconds", cycles, duration);
     console.log(`looped  ${cycles} times in duration of ${duration}`)
 }

 main();

// Find the output of below code
