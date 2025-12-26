const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

// Remove not-loaded class after page load
window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Check URL for autoplay
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("autoplay") === "true") {
    music.play().catch(() => {
      // Some browsers block autoplay; fallback to user click
      console.log("Autoplay blocked, user interaction required");
    });
    btn.textContent = "🔇 Pause Music";
  }
};

// Music play/pause toggle
btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔇 Pause Music";
  } else {
    music.pause();
    btn.textContent = "🔊 Play Music";
  }
});
