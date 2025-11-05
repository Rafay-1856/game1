let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#rest-btn");
let newgam = document.querySelector("#new");
let msg = document.querySelector(".mesg");
let p = document.querySelector("#msg");

let turnv = true;
const winpat = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const res = () => {
  turnv = true;
  msg.classList.add("hide");
  chalo();
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnv) {
      box.innerText = "V";
      turnv = false;
    } else {
      box.innerText = "B";
      turnv = true;
    }
    box.disabled = true;
    cheakwinner();
  });
});
const chalo = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const dubara = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showwin = (winner) => {
  p.innerText = `Congratulation, Winner is ${winner}`;
  msg.classList.remove("hide");
  dubara();
};

const cheakwinner = () => {
  for (let pattern of winpat) {
    let post1 = boxes[pattern[0]].innerText;
    let post2 = boxes[pattern[1]].innerText;
    let post3 = boxes[pattern[2]].innerText;

    if (post1 != "" && post2 != "" && post3 != "") {
      if (post1 === post2 && post2 === post3) {
        showwin(post1);
      }
    }
  }
};
newgam.addEventListener("click", res);
reset.addEventListener("click", res);
