export {removePrincipalEventListeners};


import {showResponsiveMenu} from '../../responsive-menu/responsive-menu.js';
import {showModal} from '../show-modal.js';
import {filterByCustomList} from '../../lists/filters.js';
import {changeCompletedOrImportantProperty} from '../../tasks/tasks.js';

function removePrincipalEventListeners() {
  const hamburguerButton = document.getElementById('menuOpen');
  const newTask = document.getElementById('newTask');
  const newList = document.getElementById('newList');
  const navListButtons = document.querySelectorAll('.nav-list__button');
  const taskButtonsCompleted = document.querySelectorAll(".task-item__button-completed");
  const taskButtonsImportant = document.querySelectorAll(".task-item__button-important");
  const taskItemTitle= document.querySelectorAll(".task-item__title");
  hamburguerButton.removeEventListener("click", showResponsiveMenu);
  newTask.removeEventListener('click', showModal);
  newList.removeEventListener('click', showModal);
  navListButtons.forEach(e => {
    e.removeEventListener('click', filterByCustomList);
  })
  taskButtonsCompleted.forEach(e => {
    e.removeEventListener("click", changeCompletedOrImportantProperty);
  })
  taskButtonsImportant.forEach(e => {
    e.removeEventListener('click', changeCompletedOrImportantProperty);
  })
  taskItemTitle.forEach(e => {
    e.removeEventListener('click', showModal);
  })
}