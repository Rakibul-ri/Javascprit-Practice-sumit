 function getRndNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getRndNumber(1,6)); 

const Students = ["Rakibul", "Sakibul", "Akash", "Nahid", "Rubel"];
console.log(Students.sort());