function createRain() {
    const rainContainer = document.querySelector(".rain-container");

    for (let i = 0; i < 150; i++) {
        let drop = document.createElement("div");
        drop.classList.add("rain-drop");

        drop.style.left = Math.random() * 100 + "vw";
        drop.style.top = Math.random() * -100 + "px";
        drop.style.animationDuration = Math.random() * 1.5 + 2 + "s";
        drop.style.animationDelay = Math.random() * 2 + "s";

        rainContainer.appendChild(drop);
    }
}

function createClouds() {
    const cloudContainer = document.querySelector(".cloud-container");

    for (let i = 0; i < 6; i++) {
        let cloud = document.createElement("div");
        cloud.classList.add("cloud");

        cloud.style.left = Math.random() * 100 + "vw";
        cloud.style.top = Math.random() * 40 + "vh";
        cloud.style.width = Math.random() * 250 + 300 + "px";
        cloud.style.height = Math.random() * 100 + 120 + "px";
        cloud.style.animationDuration = Math.random() * 12 + 18 + "s";

        cloudContainer.appendChild(cloud);
    }
}

const text = `
Sa silakbo ng togang bagong laba, 
Awit ng puso'y, tunay na nga kaya?
Sa kagingking ng dayupot mong kilos, 
Ay siya'y kalirawraw ng yamot ko.
Ngunit sa likod, ako'y narahuyo, 
Nang ritmo ng pusong di ko malubos.

Imbis diwa'y ituon sa lirika, 
Mga titig ko'y sayo, aking sinta.
Temperaturang lamig, tila upos, 
Bawat lapit mo, pawis agad bisto.
Presensyang namamalansik ng kwarto.
Dagdag pa ng boses mong bassong puspos.

Tila'y notang ligaw sayong musika, 
Ligalig sa boses mong kay ganda.
Pana ni Cupido'y wari'y tumagos.
Sya na kaya? hirit ng pusong ito.
Pagtingin o sadyang tunay na mismo.
Ang puso't isip sayo'y nagtatapos.

Banag pa lang, ikaw na aking wika.
Nang pagdating ng hapon, kapiling ka.
Gabing dingas ng panagimpang lupos,
Habang talaghay sa emosyong silo.
Sana'y ako si Pou, laging dikit mo.
Tanaw ang kariktan ng matang busbos.

Pero, sayong mata ko rin nakita.
Larawan ko'y hindi pa pala handa.
Sa gunam-gunam, diwa ko'y ginapos.
Binagtas ang alaalang kay layo,
Kasabay ng mga luhang siphayo.
Pano nga ba iibig nang di lubos?

Sa bagong piyesa, tinig ko'y kakanta.
Awit ng kundiman ko'y magtatapos.
Salamat sa makabuluhang kwento,
Na nagmulat sa sarili'y magtanto.
Lihim na pag-ibig, tanaw ng mata.
`;

let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

function goHome() {
    window.location.href = "index.html"; 
}

window.onload = function () {
    createRain();
    createClouds();
    typeWriter();
};

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
