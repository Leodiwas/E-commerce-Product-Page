"use strict";

const open = document.getElementById("fullImgBox");
const close = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const priceEl = document.querySelector(".main-price");
const discountEl = document.querySelector(".price-discount");

const openfullImg = (img) => {
  open.style.display = "flex";
  fullImg.src = img;
};

const closeImg = () => {
  close.style.display = "none";
};

//Quantity Number
const quanNumber = (number) => {
  Number((document.getElementById("quan-number").textContent = number));
};

let value = 0;
let price = 0;

const priceFormat = (n) =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);

const disCount = (n) => {
  if (n > 500) {
    discountEl.textContent = `25%`;
  }
  if (n > 750) {
    discountEl.textContent = `50%`;
  }
  if (n < 500) {
    discountEl.textContent = `20%`;
  }
  if (n === 0) {
    discountEl.textContent = `0%`;
  }
};

plusBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (value < 5) {
    quanNumber(++value);
    price += 125 * 2;
  }
  priceEl.textContent = priceFormat(price);
  disCount(price);
});

minusBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (value >= 0 && price >= 125) {
    quanNumber(--value);
    price -= 125 * 2;
  }
  priceEl.textContent = priceFormat(price);
  disCount(price);
});
