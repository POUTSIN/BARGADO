function startConfetti() {
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
    });
}

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

    setInterval(() => {
        confetti({
            angle: 90, 
            spread: 190,
            particleCount: 250,
            origin: { x: 0.5, y: 0 } 
        });
    }, 1000);
});


function goHome() {
    window.location.href = "JAJA.html"; 
}
