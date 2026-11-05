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
