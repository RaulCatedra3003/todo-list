export {
  addModalEventListeners
};


import {
  hiddeModal
} from '../hide-modal.js';


function addModalEventListeners() {
  const modal = document.getElementById("displayModal");
  const closeModalButton = document.getElementById("closeModalButton");
  closeModalButton.addEventListener("click", hiddeModal);
  window.addEventListener("keydown", hiddeModal);
  modal.addEventListener("click", hiddeModal);
}