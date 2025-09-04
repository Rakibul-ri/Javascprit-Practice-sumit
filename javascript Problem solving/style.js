 function getRndNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getRndNumber(1,6)); 

const Students = ["Rakibul", "Sakibul", "Akash", "Nahid", "Rubel"];
console.log(Students.sort()); 

function isleapyear(year){
  if ((year % 400 ===0) || ((year% 4 ===0) && (year % 100 !==0))){
    console.log (`${year} is Leapyear `);

  }
  else{
    console.log (`${year} is not Leapyear `);
  }

}

isleapyear(2032);