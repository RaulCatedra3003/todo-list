export {
  removeModalEventListeners
};


import {
  hiddeModal,
  hiddeNewTaskModal,
  hiddeNewlistModal,
  hiddeTaskDetailsModal,
  hiddeListDetailsModal
} from '../hide-modal.js';
import {
  validateTaskDescription,
  validateTaskTitle
} from '../content/validations/new-task-validations.js';
import {
  validateListTitle
} from '../content/validations/new-list-validations.js';
import {
  deleteList,
  saveNewList,
  updateList
} from '../../lists/list.js';
import {
  deleteTask,
  saveNewTask,
  updateTask
} from '../../tasks/tasks.js';
import { stopSubmitWithEnter } from '../content/new-task-content.js';


function removeModalEventListeners(openModal) {
  const modal = document.getElementById("displayModal");
  const closeModalButton = document.getElementById("closeModalButton");
  closeModalButton.removeEventListener("click", hiddeModal);
  window.removeEventListener("keydown", hiddeModal);
  modal.removeEventListener("click", hiddeModal);
  if (openModal === "newTask" || openModal === "taskDetails") {
    const taskTitle = document.getElementById('taskTitle');
    const taskDescription = document.getElementById('taskDescription');
    const cancelButton = document.getElementById('cancelButton');
    const saveButton = document.getElementById('saveButton');
    taskTitle.removeEventListener('blur', validateTaskTitle);
    taskDescription.removeEventListener('blur', validateTaskDescription);
    taskTitle.removeEventListener('keypress', stopSubmitWithEnter);
    if (openModal === "taskDetails") {
      const deleteButton = document.getElementById('deleteButton');
      cancelButton.removeEventListener("click", hiddeTaskDetailsModal);
      saveButton.removeEventListener('click', updateTask);
      deleteButton.removeEventListener('click', deleteTask);
    } else if (openModal === "newTask") {
      cancelButton.removeEventListener("click", hiddeNewTaskModal);
      saveButton.removeEventListener('click', saveNewTask);
    }
  } else if (openModal === "newList" || openModal === "listDetails") {
    const listTitle = document.getElementById('listTitle');
    const saveButton = document.getElementById('saveButton');
    const cancelButton = document.getElementById('cancelButton');
    listTitle.removeEventListener('keypress', stopSubmitWithEnter);
    listTitle.removeEventListener('blur', validateListTitle);
    if (openModal === "listDetails") {
      const deleteButton = document.getElementById('deleteButton');
      saveButton.removeEventListener('click', updateList);
      cancelButton.removeEventListener('click', hiddeListDetailsModal);
      deleteButton.removeEventListener('click', deleteList);
    } else if (openModal === "newList") {
      saveButton.removeEventListener('click', saveNewList);
      cancelButton.removeEventListener('click', hiddeNewlistModal);
    }
  }
}