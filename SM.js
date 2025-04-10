document.addEventListener("DOMContentLoaded", function() {
    let cenElement = document.getElementById("cen");
    if (cenElement) {
        cenElement.addEventListener("click", function(event) {
            event.preventDefault(); 
            scatterLeaves();
            setTimeout(() => {
                window.location.href = "JAJA.html";
            }, 1500);
        });
    } else {
        console.error("Element with ID 'cen' not found.");
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

function launchConfetti() {
    setInterval(() => {
        confetti({
            particleCount: 18, 
            angle: 90,
            spread: 120, 
            origin: { x: 0, y: 0.6 },
            colors: ['#00FF00', '#32CD32', '#008000'],
            ticks: 200, 
            decay: 0.95 
        });

        confetti({
            particleCount: 18, 
            angle: 100,
            spread: 120,
            origin: { x: 1, y: 0.6 },
            colors: ['#00FF00', '#32CD32', '#008000'],
            ticks: 200,
            decay: 0.95
        });
    }, 1500); 
}

document.addEventListener("DOMContentLoaded", () => {
    launchConfetti();
});


