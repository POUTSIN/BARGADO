document.querySelectorAll('.coin').forEach(coin => {
    coin.addEventListener('click', () => {
        window.location.href = coin.getAttribute('data-link');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("clickText").addEventListener("click", function() {
        this.style.color = "#FFD700"; 
        window.location.href = "IMG.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("score").addEventListener("click", function() {
        this.style.color = "#FFD700"; 
        window.location.href = "18TH.html";
    });
});
document.addEventListener("keydown", function(event) {
    let pou = document.getElementById("pou");
    let left = parseInt(window.getComputedStyle(pou).getPropertyValue("left"));

    if (event.key === "ArrowRight") {
        pou.style.left = left + 30 + "px";
    } else if (event.key === "ArrowLeft") {
        pou.style.left = left - 10 + "px";
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

function updateTimer() {
   
    const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" })
    );

    const startTime = new Date("2025-03-31T00:00:00+08:00"); 

    const diffMs = now - startTime;

    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;

    const timeString =
        (days < 10 ? "0" : "") + days + "d " +
        (hours < 10 ? "0" : "") + hours + "h " +
        (minutes < 10 ? "0" : "") + minutes + "m";

    document.getElementById("timer").innerText = timeString;
}

updateTimer();
setInterval(updateTimer, 60000);
