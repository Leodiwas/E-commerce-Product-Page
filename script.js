const open = document.getElementById("fullImgBox");
const close = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

function openfullImg(img) {
  open.style.display = "flex";
  fullImg.src = img;
}

function closeImg() {
  close.style.display = "none";
}

//Quantity Number
const qNumber = (number) => {
  Number((document.getElementById("quan-number").textContent = number));
};
const plusEl = document.getElementById("plus");
const minusEl = document.getElementById("minus");

let value = 0;

plusEl.addEventListener("click", () => {
  if (value < 10) return qNumber(++value);
});

minusEl.addEventListener("click", () => {
  if (value >= 0) return qNumber(value--);
});
