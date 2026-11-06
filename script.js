const prices = document.querySelectorAll(".price");
const btn = document.querySelector("#totalBtn");
const out = document.querySelector("#out");

btn.addEventListener("click", function () {
  let total = 0;
  prices.forEach(function (el) {
    total = total + Number(el.dataset.price);
  });
  out.textContent = "Три пирога: " + total + " рублей";
});
const sortBtn = document.querySelector("#sortBtn");

sortBtn.addEventListener("click", function () {
  const cards = Array.from(document.querySelectorAll(".card"));
  const copy = cards.sort(function (a, b) {
    return Number(a.querySelector(".price").dataset.price)
         - Number(b.querySelector(".price").dataset.price);
  });
  const menu = document.querySelector(".menu");
  copy.forEach(function (card) {
    menu.appendChild(card);
  });
});
