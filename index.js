/*canvas-background*/

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

/*functions*/

    function drawBall(ctx, centerX, centerY, radius, fillColor) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "pink"; 
        ctx.fill ();
    }


    const centerX1 = canvas.width / 2;
    const centerY1 = canvas.height / 2;
    const radius1 = 50;
    const fillColor1 = "pink";

    drawBall(ctx, centerX1, centerY1, radius1, fillColor1);

    const centerX2 = canvas.width / 4;
    const centerY2 = canvas.height / 4;
    const radius2 = 70;
    const fillColor2 = "pink";

    drawBall(ctx, centerX2, centerY2, radius2, fillColor2);


 });