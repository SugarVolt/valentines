// 👇 CHANGE HER NAME HERE
const herName = "Isabel";

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const title = document.getElementById("title");
const music = document.getElementById("bgMusic");
const yesSound = document.getElementById("yesSound");

let noCount = 0;
let yesSize = 18;
let musicStarted = false;

title.textContent = `Hey ${herName} 💖`;

const noMessages = [
  "Oh come on 😏",
  "That felt personal tbh",
  "You sure about that chud?",
  "Awkwaaaaardddd…",
  "I am literally begging you chud...",
  "I bet you’re enjoying this",
  "IHYNLD 😈"
];

function startMusic() {
  if (!musicStarted) {
    music.play().catch(() => {});
    musicStarted = true;
  }
}

noBtn.addEventListener("click", () => {
  startMusic();

  noCount++;

  // Make YES shake
yesBtn.classList.add("shake");
setTimeout(() => {
  yesBtn.classList.remove("shake");
}, 400);

  // Grow YES button
  yesSize += 12;
  yesBtn.style.fontSize = yesSize + "px";
  yesBtn.style.padding = "20px 32px";

  // Update message
  message.textContent =
    noMessages[Math.min(noCount - 1, noMessages.length - 1)];

  // Final NO disappears completely
  if (noCount >= 7) {
    noBtn.remove();
    message.textContent = "Yeah… I removed the option 😌";
  }
});

yesBtn.addEventListener("click", () => {
  startMusic();

  yesSound.currentTime = 0;
yesSound.play().catch(() => {});

  document.body.innerHTML = `
    <div class="card">
      <h1>YESSSSS 💘</h1>

      <img src="photo2.jpg" class="photo" alt="I didn't think it would work...">

      <p>I didn't think it would work...</p>

      <img src="photo3.jpg" class="photo" alt="Us again ❤️">

      <p>Happy Valentine’s Day, ${herName} 😌</p>
    </div>
  `;

  startHearts();
});

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 300);
}
