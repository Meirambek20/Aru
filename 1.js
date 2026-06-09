const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const result = document.getElementById("result");
const music = document.getElementById("music");

noBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
    document.querySelector(".container").style.display = "none";
    result.classList.remove("hidden");

    music.play();
});function moveNoButton() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);