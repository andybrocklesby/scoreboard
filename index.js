
// DISPLAY ITEMS and DEFINING SCORE
let homeDisplay = document.getElementById("home-display");
let guestDisplay = document.getElementById("guest-display");
let homeScore = 0;
let guestScore = 0;


// HOME FUNCTIONS
function touchdownHome() {
    homeScore += 6;
    homeDisplay.textContent = homeScore;
    highlightLeader();
}

function fieldGoalHome() {
    homeScore += 3;
    homeDisplay.textContent = homeScore;
    highlightLeader();
}

function safetyHome() {
    homeScore += 2;
    homeDisplay.textContent = homeScore;
    highlightLeader();
}


// GUEST FUNCTIONS
function touchdownGuest() {
    guestScore += 6;
    guestDisplay.textContent = guestScore;
    highlightLeader();
}

function fieldGoalGuest() {
    guestScore += 3;
    guestDisplay.textContent = guestScore;
    highlightLeader();
}

function safetyGuest() {
    guestScore += 2;
    guestDisplay.textContent = guestScore;
    highlightLeader();
}

// LEAD TRACKER FUNCTION
function highlightLeader() {
    if(homeScore > guestScore){
        homeDisplay.style.boxShadow = "0 0 100px yellow";
        guestDisplay.style.boxShadow = "0 0 0 black";
    }
    else if (homeScore < guestScore){
        guestDisplay.style.boxShadow = "0 0 100px yellow";
        homeDisplay.style.boxShadow = "0 0 0 black";
    }
}

// RESET GAME
function resetGame() {
    homeScore = 0;
    guestScore = 0;
    homeDisplay.textContent = homeScore;
    guestDisplay.textContent = guestScore;
    homeDisplay.style.boxShadow = "0 0 0 black";
    guestDisplay.style.boxShadow = "0 0 0 black";
}