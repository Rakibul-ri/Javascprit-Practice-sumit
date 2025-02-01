const Firends = ['Rakibul', 'Sakibul','Chancal','sagor','sahin', 'mashud']
let size = Firends.length;

let d = Firends.toString;

console.log(Firends[2]);

console.log(size);
//document.getElementById("demo").innerHTML = Firends.toString();
console.log(Firends.join(" # ")) ;

const Fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

document.getElementById("demo").innerHTML = Fruits.splice(2,0,"ddd","jjj");