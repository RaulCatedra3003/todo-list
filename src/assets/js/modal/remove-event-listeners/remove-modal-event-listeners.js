export {removeModalEventListeners};


import {hiddeModal, hiddeNewTaskModal} from '../hide-modal.js';
import {validateTaskDescription, validateTaskTitle} from '../content/validations/new-task-validations.js';


function removeModalEventListeners(openModal = "") {
  const modal = document.getElementById("displayModal");
  const closeModalButton = document.getElementById("closeModalButton");
  closeModalButton.removeEventListener("click", hiddeModal);
  window.removeEventListener("keydown", hiddeModal);
  modal.removeEventListener("click", hiddeModal);
  if(openModal === "newTask") {
    const taskTitle = document.getElementById('taskTitle');
    const taskDescription = document.getElementById('taskDescription');
    const cancelButton = document.getElementById('cancelButton');
    taskTitle.removeEventListener('blur', validateTaskTitle);
    taskDescription.removeEventListener('blur', validateTaskDescription);
    cancelButton.removeEventListener("click", hiddeNewTaskModal);
  } else if(openModal === "newList") {
    const listTitle = document.getElementById('listTitle');
    const saveButton = document.getElementById('saveButton');
    listTitle.removeEventListener('blur', validateListTitle);
    saveButton.removeEventListener('click', saveNewList);
  }
}