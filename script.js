// 1. Configs & Constants
let playerX = 280;
let playerY = 180;
const devMode = true;

// 2. DOM References
const player = document.getElementById("player");
const gamecontainer = document.querySelector(".game-container");
const containerRect = gamecontainer.getBoundingClientRect();
const gem = document.getElementById("gem");
const score = document.getElementById("score");

let scoreValue = 0;

function checkCollision() {
    // 1. Get player and gem bounding boxes
    const playerRect = player.getBoundingClientRect();
    const gemRect = gem.getBoundingClientRect();

    // 2. Check if the rectangles overlap (X and Y)
    if (playerRect.left < gemRect.right &&
        playerRect.right > gemRect.left &&
        playerRect.top < gemRect.bottom &&
        playerRect.bottom > gemRect.top) {
        
        // 3. Collision happened — handle it
        // Move gem to random position within container
        const maxX = containerRect.width - gem.offsetWidth;
        const maxY = containerRect.height - gem.offsetHeight;
        
        gem.style.left = Math.floor(Math.random() * maxX) + "px";
        gem.style.top = Math.floor(Math.random() * maxY) + "px";
        
        // Increment score
        scoreValue += 10;
        
        // Update score display
        score.textContent = scoreValue;
    }
}

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