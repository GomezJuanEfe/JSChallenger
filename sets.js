//Check if value is present in Set


// my solution - author's solution
function myFunction(set, val) {
   return set.has(val)
}


//Convert a Set to Array


// my solution - author's solution
function myFunction(set) {
   return [...set]
}


//Get union of two sets


// my soution
function myFunction(set1, set2) {
  const group = [...set1,...set2];
  return newSet = new Set(group);
}
// author's solution
function myFunction(a, b) {
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
}


//Creating Javascript Sets


// my solution
function myFunction(a, b, c) {
  const set = new Set();
  set.add(a).add(b).add(c);
  return set
}
// author's solution
function myFunction(a, b, c) {
  const set = new Set();
  set.add(a);
  set.add(b);
  set.add(c);
  return set;
}


//Delete element from Set


// my solution - author's solution
function myFunction(set, val) {
   set.delete(val);
  return set
}


//Add multiple elements to Set


// my solutio
function myFunction(set, arr) {
   arr.forEach(element => {
   set.add(element);
  });
  return set
}
// author's solution
function myFunction(set, arr) {
  arr.forEach((e) => set.add(e));
  return set;
}


//Get Intersection of two Javascript Sets


// my solution
function myFunction(setA, setB) {
   const intersection = new Set();
   for (const elem of setA) {
    if (setB.has(elem) === true) {
      intersection.add(elem);
    }
  }
  return intersection
}
// author's solution
function myFunction(setA, setB) {
  const int = new Set();
  setA.forEach(el => setB.has(el) && int.add(el));
  return int;
}
