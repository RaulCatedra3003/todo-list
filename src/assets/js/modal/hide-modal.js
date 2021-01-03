export {hiddeModal, hiddeNewTaskModal, hidde};


import {removeModalEventListeners} from './remove-event-listeners/remove-modal-event-listeners';
import {addPrincipalEventListeners} from './add-event-listeners/add-principal-event-listeners.js';



function hiddeModal(e) {
  console.log(e.keyCode);
  if(e.keyCode === 27) {
    hidde();
  } else if(e.target.id === "closeModalButton") {
    hidde();
  } else if(e.target.id === "displayModal") {
    hidde();
  }
}

function hiddeNewTaskModal(e){
  e.preventDefault();
  hidde("newTask");
}

function hidde(openModal) {
  const modal = document.getElementById("displayModal");
  removeModalEventListeners(openModal);
  addPrincipalEventListeners();
  modal.classList.toggle("hidde");
}