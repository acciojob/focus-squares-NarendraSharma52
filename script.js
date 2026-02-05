const squares = document.querySelectorAll(".square");

squares.forEach(currentSquare => {

  currentSquare.addEventListener("mouseover", () => {
    squares.forEach(square => {
      if (square !== currentSquare) {
        square.style.backgroundColor = "#6F4E37"; // Coffee
      }
    });
  });

  currentSquare.addEventListener("mouseout", () => {
    squares.forEach(square => {
      square.style.backgroundColor = "#E6E6FA"; // Lavender
    });
  });

});
