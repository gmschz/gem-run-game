// 1. Configs & Constants
let playerX = 280;
let playerY = 180;
const devMode = true;

// 2. DOM References
const player = document.getElementById("player");
const gamecontainer = document.querySelector(".game-container");
const containerRect = gamecontainer.getBoundingClientRect();

// 3. Event Listeners
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
    checkBounds();
    drawPlayer();

    
})

// 5. Functions (helpers, utilities)
function drawPlayer() {
    player.style.top = playerY + "px";
    player.style.left = playerX + "px";
}


function checkBounds() {
    //Player can't go outside the game container
   playerX = Math.max(0, playerX);
   playerY = Math.max(0, playerY);

   //Player can't go the right or bottom of the game container
    const maxX = containerRect.width - player.offsetWidth;
    const maxY = containerRect.height - player.offsetHeight;

    playerX = Math.min(maxX, playerX);
    playerY = Math.min(maxY, playerY);


}