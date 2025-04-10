const chatData = [
    { type: "question", text: "What is love for you?" },
    { type: "answer", text: "Spoiler: Love is subjective. If I were to answer this question, I would contradict the definition that 'love is pure,' because if it were untainted, how would it grow? If it were absolute, who could truly feel it? If it were pure truth, would there be anyone left to love?Love is the discovery of the unexpected, the peculiar interests, the strange habits, the hidden parts of a person that, instead of driving you away, draw you closer. It may have cracks, but it is never broken, for its true worth lies within, much like the wisdom in a book that only the heart can write. Love is not absolute. It is not just about truth but about how it is felt. Perspective shapes it. It is not always clear, yet it grows with every glimpse of the soul. At its core, love is benevolence, the quiet choice to seek goodness for others. Not because they were once a part of your life, but because they truly matter. You may try to deny it, but deep down, you know you have given that person your heart regardless. If that is not the case, then your feelings are likely driven by lust, interest, or obsession, making you nothing but a fool." },
    { type: "question", text: "How do you define infatuation and love?" },
    { type: "answer", text: "Some say infatuation is impulsive, possessive, idealistic, focused on the external, and weakens with separation, while love is steadfast, free, realistic, centered on the internal, and strengthens with distance. But for me, infatuation is the first form of love, eros before agape. Every relationship is driven by emotion, and growth stems from it. Love comes unexpectedly, and so does infatuation. There is space for both possessiveness and freedom, for attachment is natural, but so is the need for space. Idealism sets expectations, while reality guides them. The external and internal aspects of love can shift, and they are not always confined to what is considered infatuation or true love. Separation can weaken or strengthen love, it all depends on how you face the distance. " },
    { type: "question", text: "Based on your letter and poem, are you in love with Jaja?" },
    { type: "answer", text: "As someone who easily forms attachments, if I were to judge myself, I would say, 'He's the battle hymn that I will sing on wage of war, the dream of let there be peace, ang ibong kakanta kanta sa bawat umaga, while laying sa ugoy ng duyan, ang tonong mala 'Alleluia' na pinipilit kong abutin ngunit di alam pano kamtin.' You served as my eyeglasses during the time I first wore them, nervous but felt so much love. A moment where I had to wear a cast, my mind bending in fear, yet I experienced a deep care. You are the moon of my melancholy night, the one I gaze at with the longing for an embrace. You may have done none of those things for me personally, yet I felt them inwardly." },
    { type: "question", text: "If that's how you felt for him, why didn't you fight for him?" },
    { type: "answer", text: "Love isn't measured by how courageous you are, nor by randomly confessing just to say, 'I'm definitely ready for love because I can express myself splendidly.' Love isn’t just about how your journey unfolds but about how you, yourself, are shaped by it. In my case, without sugar-coating it, I became feeble. Yes, love conquers all, for as love vanishes doubts, but fear is like a student with perfect attendance, whereas love is the teacher and life is the principal. For every curiosity raised by fear, love throws it back, not to neglect your feelings or dismiss your thoughts, but to teach you that some answers lie within you. Not everything is about mutual learning; sometimes, love helps you see your own reflection and understand independence, regardless of whether it is reciprocated. It pushes you to find ways to answer your own questions. To graduate in life, your clearance wont be signed if you haven’t learned anything from love, especially if you haven’t discovered your own worth. Again, I may have been pessimistic, but my love for him led me to the beauty of self-discovery." },
    { type: "question", text: "Speaking of self-discovery, does heartbreak lead to growth?" },
    { type: "answer", text: "Before I answer the question, let’s clear this up, we were never a couple, nor did we share any form of relationship. We were genuinely just strangers. Now, is heartbreak necessary for me to learn? Simply put, yes, for me, it was. Through reminiscing painful feelings or fleeting memories, I came to understand my current place in the landscape of love. Despite watching countless love stories and sharing insights about love, I realized that experience is different from knowledge, I was still a novice. However, I don’t believe heartbreak is the only path to growth. Some people learn about love through experience, while others gain wisdom through observation. Always choose love, but when needed, learning to let go is also a way to grow." },
    { type: "question", text: "In your choice to pursue self-discovery, did you truly choose to let go, or did you simply give up?" },
    { type: "answer", text: "Letting go is a decision, while giving up is an option. In my experience, I’ve faced both, the need to let go for the sake of my own peace, which eventually led to giving up for the sake of my emotional well-being. Sometimes, holding on feels like strength, but in reality, it is the weight that keeps us from moving forward. What good is a flame that burns endlessly if all it does is turn itself into ashes?" },
    { type: "question", text: "Have you moved on from Jaja?" },
    { type: "answer", text: "As of now, not yet. His image still lingers in my mind, and when I zone out, I still miss him a lot. But with every sunrise, the weight of the pain slowly heals. Memories of him remain vivid in my sight, and I still have pictures of him in my gallery. For your information, its not torture, its part of my process of moving on. With these pictures on my phone lies the first person I can call 'my first love,' spoken not with shame but with genuine acknowledgment of his existence as the first man to whom my heart felt the tenderness of teenage love."},
    { type: "question", text: "Would your heart still be open to love?"},
    { type: "answer", text: "Of course, but at this moment, I want to immerse myself in personal discoveries. I want to give myself a moment of tranquility after carrying emotions that were never spoken." },
    { type: "question", text: "So bakit ka biglang nag-English?" },
    { type: "answer", text: "Wala lang. Ang hirap kasi pag-Tagalog, ang hirap i-translate kapag puro English na yung naiisip ko, tapos kapag trinanslate, sobrang lalim naman." },
    { type: "question", text: "Final message for Ja?" },
    { type: "answer", text: "Wow, parang huling sandali ko na ah. Siguro, yun lang, keep being you. Others may argue that you're still on the journey of growth, but I have loved every shape of you, no matter what. Basahin niyo na lang yung mga letters ko, nabablanko na kasi ako." }
];const chatBox = document.getElementById("chatBox");

async function displayChat() {
for (let i = 0; i < chatData.length; i++) {
    let msgDiv = document.createElement("div");
    msgDiv.classList.add("message", chatData[i].type);
    chatBox.appendChild(msgDiv);
    await typeMessage(msgDiv, chatData[i].text);
    chatBox.scrollTop = chatBox.scrollHeight;
    await new Promise(res => setTimeout(res, 500));
}
}

async function typeMessage(element, text) {
for (let i = 0; i < text.length; i++) {
    element.innerHTML += text[i];
    await new Promise(res => setTimeout(res, 30));
}
}

displayChat();

function goHome() {
    window.location.href = "index.html";
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
});
