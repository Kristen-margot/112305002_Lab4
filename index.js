
const drumButtons = document.querySelectorAll(".drum");


function playSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick.mp3").play();
            break;
        case "s":
            new Audio("sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("sounds/tom-4.mp3").play();
            break;
        default:
            console.log(key);
    }
}

// Function to animate the button
function animateButton(key) {
    const activeButton = document.querySelector(`.${key}`);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

// Adding event listeners to buttons for mouse clicks
drumButtons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonKey = this.innerHTML;
        playSound(buttonKey);
        animateButton(buttonKey);
    });
});

// Adding event listener for keyboard presses
document.addEventListener("keydown", function (event) {
    playSound(event.key);
    animateButton(event.key);
});