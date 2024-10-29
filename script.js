function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createBubbles() {
  const wrapper = document.getElementById("bubbleWrapper");
  wrapper.innerHTML = "";

  const bubbleSize = 54;
  const rows = Math.floor(window.innerHeight / bubbleSize);
  const cols = Math.floor(window.innerWidth / bubbleSize);
  const totalBubbles = rows * cols;

  for (let i = 0; i < totalBubbles; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.backgroundColor = getRandomColor();
    wrapper.appendChild(bubble);
  }
}

createBubbles();
window.addEventListener("resize", createBubbles);
