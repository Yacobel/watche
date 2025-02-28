let man = document.getElementById("men");

let women = document.getElementById("women");
let kids = document.getElementById("kids");
let all = document.getElementById("all");

let card = document.querySelectorAll(".carde");
console.log(man);
console.log(women);
console.log(kids);
console.log(card);

man.onclick = function () {
  card.forEach((el) => {
    if (!el.classList.contains("men")) {
      el.style.display = "none";

      console.log(el);
    } else {
      el.style.display = "flex";
    }
  });
};
women.onclick = function () {
  card.forEach((el) => {
    if (!el.classList.contains("women")) {
      el.style.display = "none";
      console.log(el);
    } else {
      el.style.display = "flex";
    }
  });
};

kids.onclick = function () {
  card.forEach((el) => {
    if (!el.classList.contains("kids")) {
      el.style.display = "none";
      console.log(el);
    } else {
      el.style.display = "flex";
    }
  });
};
all.onclick = function () {
  card.forEach((el) => {
    el.style.display = "flex";
  });
};
