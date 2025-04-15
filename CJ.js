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

let startTime = localStorage.getItem("startTime");

if (!startTime) {
    startTime = Date.now();
    localStorage.setItem("startTime", startTime);
} else {
    startTime = parseInt(startTime);
}

function updateTimer() {
    const now = Date.now();
    const elapsedTime = now - startTime;

    const totalMinutes = Math.floor(elapsedTime / (1000 * 60));
    const days = Math.floor(totalMinutes / 1440); // 1440 minutes in a day
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const minutes = totalMinutes % 60;

    const timeString =
        (days < 10 ? "0" : "") + days + "d " +
        (hours < 10 ? "0" : "") + hours + "h " +
        (minutes < 10 ? "0" : "") + minutes + "m";

    document.getElementById("timer").innerText = timeString;
}

updateTimer();
setInterval(updateTimer, 60000); // Update every minute
