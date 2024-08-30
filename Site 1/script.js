function changeBackgroundColor() {
    var colors = ["#1a73e8", "#f5f5f5", "#3357FF", "#fbbc05", "#FF33A1"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  