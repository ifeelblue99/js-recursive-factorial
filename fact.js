/*
recursive factorial function

factorial(5) --> 5*4*3*2*1 = 120
*/

function factorial(number){
  if (number == 0) {
    return 1 
  }
  
 return number*factorial(number-1)
}

// driver code
console.log(factorial(12));
