//Return the next nearest quarter hour of a date


// my solution
function myFunction(date1, date2) {
   return date1.getTime() === date2.getTime()
}
// author's solution
function myFunction( a, b ) {
     return a.getTime() === b.getTime()
}


//Check if two dates fall on the exact same day


// my solution
function myFunction(date1, date2) {
   return Math.abs(date1 - date2) / (1000 * 3600 * 24);
}
// author's solution
function myFunction( a, b ) {
   const dif = Math.abs(a - b);
   return dif / 1000 / 60 / 60 / 24
}


//Check if two dates are equal


// my solution
function myFunction(date1, date2) {
   return date1.getTime() === date2.getTime()
}
// author's solution
function myFunction( a, b ) {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth() === b.getMonth() &&
         a.getDate()=== b.getDate()
}


//Check if one date is earlier than another


// my solution
function myFunction(obj) {
   return obj.a.getTime() - obj.b.getTime() < 0
}
// author's solution
function myFunction( { a, b } ) {
   return a < b
}


//Check if two dates are within 1 hour from each other


// my solution
function myFunction(date1, date2) {
  let dif = Math.abs(date1 - date2);
  let hour = 1000 * 3600;
  return dif <= hour;
}
// author's solution
function myFunction( a, b ) {
   return Math.abs( a - b) / 1000 / 60 <= 60
}


//Add n days to an existing date


// my solution
function myFunction(obj) {
   return (obj.date.getTime()) + (obj.daysToAdd * 1000 * 3600 * 24)
}
// author's solution
function myFunction({ date, daysToAdd }) {
  const currentDays = date.getDate();
  return date.setDate(currentDays + daysToAdd)
}


//Return the number of days between two dates


// my solution
function myFunction(date1, date2) {
  let obj = {};
  obj['hrs'] = Math.abs(date1.getHours() - date2.getHours());
  obj['min'] = Math.abs(date1.getMinutes() - date2.getMinutes());
  obj['sec'] = Math.abs(date1.getSeconds() - date2.getSeconds());
  return obj
}
// author's soution
function myFunction( a, b ) {
  const dif = Math.abs(a - b);
  const hrs = Math.floor(dif / 1000 / 60 / 60);
  const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);
  const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);
  return { hrs, min, sec }
}


//Calculate difference between two dates in hours, minutes, and seconds


// my solution
function myFunction(date) {
   let min = date.getMinutes();
   while (min % 15 !== 0) {
    min = min + 1;
  }
  return min
}
// author's solution
function myFunction(date) {
const quarter = 15 * 60 * 1000;
const closestQuarter = new Date(Math.round(date / quarter) * quarter);
const nextQuarter = closestQuarter.getTime() < date.getTime() ? new Date(closestQuarter.getTime() + quarter) : closestQuarter;
return nextQuarter.getMinutes();
}
