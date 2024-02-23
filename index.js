/*canvas-background*/
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");


    /*circle*/

    const centerX = canvas.width / 2; 
    const centerY = canvas.height / 2; 
    const radius = 50; 
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "pink"; 
    ctx.fill ();
    ctx.beginPath(); 
    ctx.moveTo(100,100);
    ctx.lineTo(200,200);
    ctx.closePath(); 

    /*functions*/

   

    });