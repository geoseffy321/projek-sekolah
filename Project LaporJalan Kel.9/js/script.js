const words = ["Jalan", "Jembatan", "Trotoar",];
let index = 0;

function changeText() {
  index = (index + 1) % words.length;
  document.getElementById("text").textContent = words[index];

  let randomTime = Math.floor(Math.random() * 2000) + 3000; // 3-5 detik
  setTimeout(changeText, randomTime);
}

changeText();