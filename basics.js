//Comparison operators, strict equality

//my soution - author's solution
function myFunction(a, b) {
   return a === b;
}


//Multiplication, division, and comparison operators


//my solution
function myFunction(a, b) {
   if (a < b) {
      return a / b;
   } else {
      return a * b;
   }
   return
}
//author's solution
function myFunction(a, b) {
  return a < b ? a / b : a * b
}


//Check if a number is even


function myFunction(a) {
   return a % 2 === 0;
}


//Check if a number is a whole number
    
    
    //my solution
    function myFunction(a) {
       number = parseInt(a);
       number = a % number;
       return number === 0
    }
    //author's solution
    function myFunction(input) {
      return input - Math.floor(input) === 0
    }
    
    
    
//Check whether a string contains another string and concatenate


//my solution
function myFunction(a, b) {
   str = a.includes(b);
   if (str === true) {
      return b + a;
   } else {
      return a + b;
   }
}
//author's solution
function myFunction(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a
}


//Find next higher natural number that is divisble by y


//my solution
function myFunction(x, y) {
   return x % y === 0 ? x : y * (Math.ceil(x / y))
}
//author's solution
function myFunction(x, y) {
  while (x % y !== 0) x++;
  return x;
}


//Round a number to 2 decimal places


//my solution
function myFunction(a) {
   return parseFloat(a.toFixed(2));
}
//author's solution
function myFunction(num) {
  return Number(num.toFixed(2));
}


//Split a number into its digits


//my solution
function myFunction(a) {

   let num = a.toString();
   let arr = [];
   for (var i = 0; i < num.length; i++) {
      var a = parseInt(num.charAt(i));
      arr.push(a);
   }
   return arr;
}
//author's solution
function myFunction( num ) {
  const string = num + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit))
}


//Find the correct word by incrementing letters in alphabet


//my solution
function myFunction(a) {
   let string = a.split('');
   let char = string.map(function(char) {
      return char.charCodeAt(0) + 1;
   });
   let word = String.fromCharCode(...char);
   return word
}
//author's solution
function myFunction(str) {
  const arr = [...str];
  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
  return correctedArray.join('');
}


//Clear up the chaos behind these strings


//my solution
function myFunction (a, b) {
   function extraerChar (a) {
      return a.split('%').join('');
   };
   function upperFormat (a) {
      function toLower (match) {
         return match.toUpperCase();
      }
      return a.replace(/[a-zA-Z]/, toLower);
   };
   const may = upperFormat(a);
   const cleanA = extraerChar(may);
   const cleanB = b.split('%').join('').split('').reverse().join('');
   return cleanA+cleanB;
}
//author's solution
function myFunction(a, b) {
  const first = a.split('').map(part => part.replace('%', '')).join('');
  const second = b.split('').reverse().map(part => part.replace('%', '')).join('');
  return first.charAt(0).toUpperCase() + first.slice(1) + second
}


//Return the percentage of a number


//my solution
function myFunction(obj) {
   return x = obj.number * (obj.percentage/100);
}

//author's solution
function myFunction({ number, percentage }) {
  return number / 100 * percentage
}


//How many times does a character occur?


//my solution
function myFunction(a, b) {
   arr = b.toLowerCase().split(a);
   return arr.length -1
}
//author's solution
function myFunction(char, string) {
  return string.toLowerCase().split(char).length - 1
}


//Return the next higher prime number


//my solution
function myFunction(n) {
   function esPrimo(n) {
     let flag;
     if (n == 2) {
        flag = true;
     } else {
        for (let i = 2; i <= n-1; i++) {
           if (n % i == 0) {
              flag = false;
              break;
           } else {
              flag = true;
           }
        }
     }
     return flag
  }
   let flag = esPrimo(n);
   if (flag == true) {
     return n
   } else {
     do {
       n++;
       flag = esPrimo(n);
     } while (flag == false);
     return n
   }
}
//author's solution
function myFunction( input ) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
 let n = input;
 while (!isPrime(n)) n++;
return n
}
