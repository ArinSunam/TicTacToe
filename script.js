let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset.btn")

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
]

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    console.log(`box${index} was cliked`)

    if (turnO) {
      box.innerHTML = 'O'
      box.style.color = 'blue'
      turnO = false
    } else {
      box.innerHTML = 'X'
      turnO = true;
    }

    box.disable

  })
})
