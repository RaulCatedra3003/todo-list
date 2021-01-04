export {hiddeModal, hiddeNewTaskModal, hidde, updateCurrentOpenModal, hiddeNewlistModal, hiddeTaskDetailsModal, hiddeListDetailsModal};


import {removeModalEventListeners} from './remove-event-listeners/remove-modal-event-listeners';
import {addPrincipalEventListeners} from './add-event-listeners/add-principal-event-listeners.js';

var currentModalOpen;

function hiddeModal(e) {
  if(e.keyCode === 27) {
    hidde(currentModalOpen);
  } else if(e.target.id === "closeModalButton") {
    hidde(currentModalOpen);
  } else if(e.target.id === "displayModal") {
    hidde(currentModalOpen);
  }
}

function hiddeNewTaskModal(e){
  e.preventDefault();
  hidde("newTask");
}
function hiddeNewlistModal(e){
  e.preventDefault();
  hidde("newList");
}
function hiddeTaskDetailsModal(e){
  e.preventDefault();
  hidde("taskDetails");
}
function hiddeListDetailsModal(e){
  e.preventDefault();
  hidde("listDetails");
}
function hidde(openModal) {
  const modal = document.getElementById("displayModal");
  removeModalEventListeners(openModal);
  addPrincipalEventListeners();
  modal.classList.toggle("hidde");
}

function updateCurrentOpenModal(value){
  currentModalOpen=value;
}