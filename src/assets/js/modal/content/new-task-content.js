export {
  addNewTaskModalContent
}



import {
  hiddeNewTaskModal
} from '../hide-modal.js';
import {
  validateTaskDescription,
  validateTaskTitle
} from './validations/new-task-validations.js';
import {
  customListsArray
} from '../../lists/list.js';
import {
  saveNewTask
} from '../../tasks/tasks.js';



const newTaskFomr = `
<h2 class="modal-title">New task</h2>
<form class='task-form'>
  <label for="taskTitle" class='task-form__label task-form__item'>Title*:</label>
  <input type="text" name="taskTitle" id="taskTitle" class="task-form__input task-form__item">
  <label for="taskDescription" class='task-form__label task-form__item'>Description*:</label>
  <textarea name="taskDescription" id="taskDescription" class="task-form__input-textarea task-form__item"></textarea>
  <fieldset class="fieldset-checkbox task-form__item">
    <input type="checkbox" class="fieldset-checkbox__input" id="isCompleted">
    <label for="isCompleted" class='fieldset-checkbox__label'>Completed</label>
    <input type="checkbox" id="isImportant" class="fieldset-checkbox__input">
    <label for="isImportant" class='fieldset-checkbox__label'>Important</label>
  </fieldset>
  <label for="selectedList" class='task-form__label task-form__item'>Custom list:</label>
  <select name="selectedList" id="selectedList" class="task-form__input task-form__item">
    <option value="none">Select a custom list</option>
  </select>
  <label for="taskColor" class='task-form__label task-form__item'>Task color:</label>
  <select name="taskColor" id="taskColor" class="task-form__input task-form__item">
    <option value="none" selected>Select a task color</option>
    <option value="purple">Purple</option>
    <option value="green">Green</option>
    <option value="yellow">Yellow</option>
    <option value="orange">Orange</option>
    <option value="grey">Grey</option>
    <option value="pink">Pink</option>
    <option value="blue">Blue</option>
  </select>
  <fieldset class="fieldset-buttons task-form__item">
    <button class="fieldset-buttons__button" id="cancelButton">Cancel</button>
    <button class="fieldset-buttons__button" id="saveButton" disabled>Save</button>
  </fieldset>
</form>`


function addNewTaskModalContent() {
  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = '';
  modalContent.innerHTML = newTaskFomr;
  const selectedList = document.getElementById('selectedList');
  customListsArray.forEach(value => {
    selectedList.innerHTML += `<option id="${value}">${value}</option>`
  })
  const taskTitle = document.getElementById('taskTitle');
  const taskDescription = document.getElementById('taskDescription');
  const cancelButton = document.getElementById('cancelButton');
  const saveButton = document.getElementById('saveButton');
  taskTitle.addEventListener('blur', validateTaskTitle);
  taskDescription.addEventListener('blur', validateTaskDescription);
  cancelButton.addEventListener("click", hiddeNewTaskModal);
  saveButton.addEventListener('click', saveNewTask);
}