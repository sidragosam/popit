function getRandomColor() {
  const letters = "0123456789ABCDEF";
  return (
    "#" +
    Array.from(
      { length: 6 },
      () => letters[Math.floor(Math.random() * 16)]
    ).join("")
  );
}

function createBubbles() {
  const wrapper = document.getElementById("bubbleWrapper");
  wrapper.innerHTML = "";

  const bubbleSize = 54;
  const rows = Math.floor(window.innerHeight / bubbleSize);
  const cols = Math.floor(window.innerWidth / bubbleSize);
  const totalBubbles = rows * cols;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < totalBubbles; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.backgroundColor = getRandomColor();
    fragment.appendChild(bubble);
  }

  wrapper.appendChild(fragment);
}

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(createBubbles, 200);
});

createBubbles();
