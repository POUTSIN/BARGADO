document.addEventListener("DOMContentLoaded", function() {
    let heartElement = document.querySelector(".heart"); 

    if (heartElement) {
        heartElement.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "index.html"; 
        });
    } else {
        console.error("Element with class 'heart' not found.");
    }
});

window.addEventListener("load", function() {
    let audio = document.getElementById("bgMusic");
    audio.volume = 0.8; 

    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay blocked. Waiting for user action...");
            document.addEventListener("click", function() {
                audio.play();
            }, { once: true });
        });
    }
});

function createPuso() {
    const puso = document.createElement("div");
    puso.innerHTML = "&#10084;"; 
    puso.classList.add("puso");

    const positionX = Math.random() * 100; 
    puso.style.left = positionX + "vw";
    puso.style.animationDuration = Math.random() * 3 + 2 + "s"; 

    document.getElementById("heart-container").appendChild(puso);

    setTimeout(() => {
        puso.remove();
    }, 5000);
}

setInterval(createPuso, 300);
