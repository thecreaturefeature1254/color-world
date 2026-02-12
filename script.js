var playersprite = document.getElementById("A");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('keydown', async function(event) {
  await sleep(100);

  if (event.key === "w") {
    // Get current top value (remove "px")
    let currentTop = parseInt(playersprite.style.top) || 0;
    playersprite.style.top = (currentTop - 5) + "px";
  }
});
