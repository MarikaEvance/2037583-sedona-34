const searchВutton = document.querySelector(".search-button");
const modalPopup = document.querySelector(".modal-container");
const modalClose = modalPopup.querySelector(".modal-close-button");

searchВutton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");
});
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
});
