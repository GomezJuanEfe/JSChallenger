//Sort an array of strings alphabetically


//my solution
function myFunction(a) {
   return a.sort()
}
//author's solution
function myFunction( input ) {
return input.sort()
}


//Sort an array of numbers in descending order


//my solution
function myFunction(num) {
   return num.sort((a, b) => {return b - a});
}
//author's solution
function myFunction( input ) {
  return input.sort((a, b) => b - a)
}


//Return the average of an array of numbers


//my solution
function myFunction(arr) {
   return arr.reduce((a, b) => a + b) / arr.length
}
//author's solution
function myFunction( input ) {
return input.reduce((acc, cur) => acc + cur, 0) / input.length
}


//Sum up all array elements with values greater than


//my solution
function myFunction(arr,num) {
   return (arr.filter(arr => arr > num)).reduce((a, b)=> a + b);
}
//author's solution
function myFunction(arr, num) {
  return arr.reduce((sum, cur) => {
    if (cur > num) return sum + cur;
    return sum;
  }, 0);
}


//Create a range of numbers


//my solution || author's solution
function myFunction(min, max) {
   let arr = [];
   for (let i = min; i <= max; i++) {
      arr.push(i);
   }
   return arr;
}


//Return last n array elements


//my solution
function myFunction(arr, n) {
   return (arr.length < n) ? arr : arr.slice(-n, arr.length)
}
//author's solution
function myFunction(arr, n) {
  return arr.slice(-n);
}


//Return the longest string from an array of strings


//my solution
function myFunction(arr) {
   let max = 0;
   arr.map((v) => max = Math.max(max,v.length));
   const result = arr.filter((x) => x.length == max);
   return result[0]
}
//author's solution
function myFunction( input ) {
return input.reduce((a, b) => a.length <= b.length ? b : a)
}


//Remove a specific array element


//my solution
function myFunction(arr, v) {
   return  arr.filter((x) => x !== v)
}
//author's solution
function myFunction( arr, value ) {
  return arr.filter(cur => cur !== value)
}


//Check if all array elements are equal


//my solution
function myFunction(arr) {
      return arr.every((a) => a === arr[0]);
}
//author's solution
function myFunction( input ) {
  return new Set(input).size === 1
}


//Define an array with conditional elements


//my solution
function myFunction(arr,num) {
   arr.unshift((num < 6 ? 0 : num));
   return arr
}
//author's solution
function myFunction(array, num) {
 return [...(num > 5 ? [num] : [0]), ...array];
}


//Merge an arbitrary number of arrays


//my solution
function myFunction(...arr) {
   return arr.reduce((a,b) => a.concat(b))
}
//author's solution
function myFunction( ...arrays ) {
return arrays.flat()
}


//Merge two arrays with duplicate values


//my solution
function myFunction(...arr) {
   return [... new Set(arr.flat())].sort((a,b) => a - b);
}
//author's solution
function myFunction(first, second) {
  return [...new Set([...first, ...second])].sort((a, b) => a - b);
}


//Group array of strings by first letter.


//my solution
let otherfunction = (arr) => {
   let filterLetter = (a, arr) => {
      return [a, (arr.filter(x => x.indexOf(a.toUpperCase()) !== -1))];
   }
   let x = [];
   let obj = [];
   arr.forEach(element => x.push(element.toLowerCase().charAt(0)));
   x = [...new Set(x)];
   x.map((element) => {
      return obj.push(filterLetter(element, arr));
   });
   obj = Object.fromEntries(obj);
   return obj
}
//author's solution
function myFunction(array) {
 return array.reduce((acc, cur) => {
   const firstLetter = cur.toLowerCase().charAt(0);
   return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
 }, {});
}
