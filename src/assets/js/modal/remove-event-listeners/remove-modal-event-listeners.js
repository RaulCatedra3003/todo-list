export {removeModalEventListeners};


import {hiddeModal, hiddeNewTaskModal, hiddeNewlistModal, hiddeTaskDetailsModal} from '../hide-modal.js';
import {validateTaskDescription, validateTaskTitle} from '../content/validations/new-task-validations.js';
import {validateListTitle} from '../content/validations/new-list-validations.js';
import {saveNewList} from '../../lists/list.js';
import {deleteTask, saveNewTask, updateTask} from '../../tasks/tasks.js';


function removeModalEventListeners(openModal) {
  const modal = document.getElementById("displayModal");
  const closeModalButton = document.getElementById("closeModalButton");
  closeModalButton.removeEventListener("click", hiddeModal);
  window.removeEventListener("keydown", hiddeModal);
  modal.removeEventListener("click", hiddeModal);
  if(openModal === "newTask" || openModal === "taskDetails") {
    const taskTitle = document.getElementById('taskTitle');
    const taskDescription = document.getElementById('taskDescription');
    const cancelButton = document.getElementById('cancelButton');
    const saveButton = document.getElementById('saveButton');
    taskTitle.removeEventListener('blur', validateTaskTitle);
    taskDescription.removeEventListener('blur', validateTaskDescription);
    if(openModal === "taskDetails"){
      const deleteButton = document.getElementById('deleteButton');
      cancelButton.removeEventListener("click", hiddeTaskDetailsModal);
      saveButton.removeEventListener('click', updateTask);
      deleteButton.removeEventListener('click', deleteTask);
    }else if(openModal === "newTask"){
      cancelButton.removeEventListener("click", hiddeNewTaskModal);
      saveButton.removeEventListener('click', saveNewTask);
    }
  } else if(openModal === "newList") {
    const listTitle = document.getElementById('listTitle');
    const saveButton = document.getElementById('saveButton');
    const cancelButton = document.getElementById('cancelButton');
    listTitle.removeEventListener('blur', validateListTitle);
    saveButton.removeEventListener('click', saveNewList);
    cancelButton.removeEventListener('click', hiddeNewlistModal);
  }
}