

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the value end of the second variable')
function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(swap)
  }


function draw()
{
}
function swap(){
  [a,b]=[b,a]
console.log("the value of a after swaping"+a) 
console.log("the value of b after swaping"+b)
}