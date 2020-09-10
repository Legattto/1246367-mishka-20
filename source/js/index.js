var btnOrder = document.querySelectorAll(".js-order");
var modal = document.querySelector(".modal");

btnOrder.forEach(function(el){
  el.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--active");
  })
});

var modalBtn = document.querySelector(".modal__button");
var modalClose = document.querySelector(".modal__overlay");
if (modalClose) {
  modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal--active");
  });



modalBtn.addEventListener("click", function (evt) {
  if (modal.classList.contains("modal--active")) {
    evt.preventDefault();
    modal.classList.remove("modal--active");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--active")) {
      evt.preventDefault();
      modal.classList.remove("modal--active");
    }
  }
});
};
var mainNav = document.querySelector(".js-nav");
var btnToggle = document.querySelector(".nojs-btn");
mainNav.classList.add("main-nav--hide");
btnToggle.classList.remove("btn--hide");

btnToggle.addEventListener("click", function (e) {
  e.preventDefault();
  mainNav.classList.toggle("main-nav--hide");
  btnToggle.classList.toggle("btn--active");
});
