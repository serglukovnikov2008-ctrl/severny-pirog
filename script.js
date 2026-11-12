const PIES = [
  { id: "kalitka", name: "Калитка с картошкой", price: 45, kind: "солёное", parts: "Тесто ржаное, картофельное пюре, сметана, масло" },
  { id: "shanga", name: "Шаньга со сметаной", price: 50, kind: "солёное", parts: "Тесто дрожжевое, сметана, творог, масло" },
  { id: "rybnik", name: "Рыбник", price: 90, kind: "солёное", parts: "Тесто дрожжевое, филе трески, лук, специи" },
  { id: "brusnika", name: "Брусничный пирог", price: 70, kind: "сладкое", parts: "Тесто песочное, брусника, сахар, крахмал" },
  { id: "moroshka", name: "Морошковый пирог", price: 85, kind: "сладкое", parts: "Тесто песочное, морошка, сахар, крахмал" },
  { id: "cherniga", name: "Черничная ватрушка", price: 60, kind: "сладкое", parts: "Тесто сдобное, творог, черника, сахар" }
];

const menu = document.querySelector("#menu");
const filters = document.querySelector("#filters");
const sortBtn = document.querySelector("#sortBtn");
const totalBtn = document.querySelector("#totalBtn");
const out = document.querySelector("#out");
const themeBtn = document.querySelector("#themeBtn");
const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
const modalClose = document.querySelector("#modalClose");

let currentKind = "все";
let sorted = false;

function visiblePies() {
  return PIES.filter(function (pie) {
    return currentKind === "все" || pie.kind === currentKind;
  });
}

function renderMenu() {
  let list = visiblePies();
  if (sorted) {
    list = [...list].sort(function (a, b) { return a.price - b.price; });
  }
  if (list.length === 0) {
    menu.innerHTML = "<li>Ничего не найдено</li>";
    return;
  }
  menu.innerHTML = list.map(function (pie) {
    return `<li class="card" data-id="${pie.id}"><h3>${pie.name}</h3><p class="price">${pie.price} ₽</p><p class="muted">${pie.kind}</p></li>`;
  }).join("");
}

function openModal(pie) {
  modalTitle.textContent = pie.name;
  modalText.textContent = pie.parts;
  modal.classList.remove("hidden");
}
function closeModal() { modal.classList.add("hidden"); }

filters.addEventListener("click", function (event) {
  const btn = event.target.closest("button");
  if (btn === null) return;
  currentKind = btn.dataset.kind;
  filters.querySelectorAll("button").forEach(function (b) {
    b.classList.toggle("is-active", b === btn);
  });
  renderMenu();
});

sortBtn.addEventListener("click", function () {
  sorted = !sorted;
  sortBtn.textContent = sorted ? "Как в меню" : "Сначала дешёвые";
  renderMenu();
});

totalBtn.addEventListener("click", function () {
  let total = 0;
  visiblePies().forEach(function (pie) { total = total + pie.price; });
  out.textContent = "Сумма всех позиций в списке: " + total + " ₽";
});

menu.addEventListener("click", function (event) {
  const card = event.target.closest(".card");
  if (card === null) return;
  const pie = PIES.find(function (p) { return p.id === card.dataset.id; });
  if (pie) openModal(pie);
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", function (event) {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeModal();
});

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeBtn.textContent = "Светлая тема";
  } else {
    document.documentElement.removeAttribute("data-theme");
    themeBtn.textContent = "Тёмная тема";
  }
}
let savedTheme = "";
try { savedTheme = localStorage.getItem("pie-theme") || ""; } catch (e) {}
applyTheme(savedTheme);
themeBtn.addEventListener("click", function () {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const next = isDark ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("pie-theme", next); } catch (e) {}
});

renderMenu();
