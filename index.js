const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath(); 
ctx.moveTo(100,100);
ctx.moveTo(200,200);
ctx.closePath(); 

/*circle*/

const centerX = canvas.width / 2; // X-koordinaten för cirkelns centrum
const centerY = canvas.height / 2; // Y-koordinaten för cirkelns centrum
const radius = 50; // Radien för cirkeln
ctx.fill('blue'); // Fyll cirkeln med den angivna färgen
ctx.arc(2, 2, 50, 0, 2 * Math.PI); // Rita cirkeln
ctx.fillStyle = 'blue'; // Ställ in fyllfärgen till blå

/*functions*/

function bouncingballs(parameter1, parameter2, parameter3) {
  draw
}

bouncingballs ()