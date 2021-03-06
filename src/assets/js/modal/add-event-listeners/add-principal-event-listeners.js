export {
  addPrincipalEventListeners
}

import {
  showResponsiveMenu
} from '../../responsive-menu/responsive-menu.js';
import {
  showModal
} from '../show-modal.js';
import {
  filterByCustomList
} from '../../lists/filters.js';
import {
  changeCompletedOrImportantProperty
} from '../../tasks/tasks.js';
import {
  searchFunction
} from '../../search-engine/search-engine.js';


function addPrincipalEventListeners() {
  const hamburguerButton = document.getElementById('menuOpen');
  const newTask = document.getElementById('newTask');
  const newList = document.getElementById('newList');
  const navListButtons = document.querySelectorAll('.nav-list__button');
  const taskButtonsCompleted = document.querySelectorAll(".task-item__button-completed");
  const taskButtonsImportant = document.querySelectorAll(".task-item__button-important");
  const taskItemTitle = document.querySelectorAll(".task-item__title");
  const listContentButton = document.querySelectorAll(".lists-content__button");
  const search = document.getElementById('filter');
  search.addEventListener('keyup', searchFunction);
  hamburguerButton.addEventListener("click", showResponsiveMenu);
  newTask.addEventListener('click', showModal);
  newList.addEventListener('click', showModal);
  navListButtons.forEach(e => {
    e.addEventListener('click', filterByCustomList);
  })
  taskButtonsCompleted.forEach(e => {
    e.addEventListener("click", changeCompletedOrImportantProperty);
  })
  taskButtonsImportant.forEach(e => {
    e.addEventListener('click', changeCompletedOrImportantProperty);
  })
  taskItemTitle.forEach(e => {
    e.addEventListener('click', showModal);
  })
  listContentButton.forEach(listItem => {
    listItem.addEventListener("dblclick", showModal)
  })
}