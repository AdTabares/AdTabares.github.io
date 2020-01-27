document.write("Using Math.sqrt <br/>")
for(var k = 0; k < 9; k++)
  {
    var ans = Math.sqrt(k);
    document.write(ans + "<br/>");
  }

document.write("<br/>  Using Math.random")

var beginning = 40;

while(beginning > 0)
   {
    document.write("<br />Current Count: " + beginning )
    beginning = Math.random () * 11;
     beginning--;
   }
function myLoop(){ 
var start = document.getElementById("start").value;  
var end = document.getElementById("end").value;
var jump = document.getElementById("jump").value;

console.log(typeof start);
console.log(typeof end);
console.log(typeof jump);
  
start = Number(start);
end = Number(end);
jump = Number(jump);
  
console.log(typeof start);
console.log(typeof end);
console.log(typeof jump);  
  
for(var i = start; i <= end; i+=jump)
  {
    document.write('<p>' + i + '</p>');
  }  
  }
