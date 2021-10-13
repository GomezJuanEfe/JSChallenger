//Accessing object properties one


// my solution - author's solution
function myFunction(obj) {
   return obj.country
}


//Accessing object properties two


// my solution - author's solution
function myFunction(obj) {
   return obj['prop-2']
}


//Accessing object properties three


// my solution
function myFunction(obj, prop) {
   return obj[prop]
}
// author's solution
function myFunction( obj, key ) {
  return obj[key]
}


//Remove a property from an object


// my solution
function myFunction(obj) {
   delete obj.country;
   return obj
}
// author's solution
function myFunction(obj) {
  const { country, ...rest } = obj;
  return rest;
}


//Merge two objects with matching keys


// my solution
function myFunction(obj1, obj2) {
   obj2.city = obj2.country;
   delete obj2.country;
   return {...obj1, ...obj2}
}
//author's solution
function myFunction(first, second) {
  const { country, ...rest } = second;
  return { ...first, ...rest, city: country };
}


//Swap object keys and values


//my solution
function myFunction(obj) {
   const ret = {};
  Object.keys(obj).forEach(key => {
   ret[obj[key]] = key;
});
  return ret;
}
// author's solution
function myFunction(obj) {
  return Object.keys(obj).reduce((acc, cur) => {
    return {  ...acc, [obj[cur]]: cur };
  }, {});
}


//Replace empty strings in object with null values


// my solution
function myFunction(obj) {
  let ret = {};
  Object.keys(obj).forEach( key => {
    if (obj[key] === '' || obj[key] === ' ' ) {
      console.log(obj[key]);
      ret[key] = null;
    } else {
      ret[key] = obj[key];
    }
  })
  return ret
}
// author's solution
function myFunction(obj) {
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === '') newObj[key] = null;
  }
  return newObj;
}


//Extracting information from objects


// my solution
function myFunction(obj) {
     let ret = {};
  for ( key in obj)
  switch (key) {
    case 'fn':
      ret[key] = obj[key];
      break;
    case 'ln':
      ret[key] = obj[key];
      break;
    case 'size':
      ret[key] = obj[key] + 'cm';
      break;
    case 'weight':
      ret[key] = obj[key] + 'kg';
    default:
  }
  return ret
}
// author's solution
function myFunction(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
}


//Add property to each object in array


// my soution
function myFunction(arr, str) {
   for (const val of arr) {
    val['continent'] = str;
  }
  return arr
}
// author's solution
function myFunction(arr, str) {
  return arr.map((obj) => ({ ...obj, continent: str }));
}
