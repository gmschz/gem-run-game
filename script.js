let playerX = 280;
let playerY = 180;
const devMode = true;
const player = document.getElementById("player");

document.addEventListener("keydown", function(event) {
    //TEMP for debugging
    if (devMode){
        console.log(event.key)
    }
    

    // Movement logic here
    if (event.key === "ArrowUp") {
        playerY -= 10;
    } else if (event.key === "ArrowDown") {
        playerY += 10;
    } else if (event.key === "ArrowLeft") {
        playerX -= 10;
    } else if (event.key === "ArrowRight") {
        playerX += 10;
    }
    drawPlayer();

    
})
function drawPlayer() {
    player.style.top = playerY + "px";
    player.style.left = playerX + "px";
}