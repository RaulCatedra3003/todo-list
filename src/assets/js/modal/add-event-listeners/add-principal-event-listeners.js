export {addPrincipalEventListeners}

import {showResponsiveMenu} from '../../responsive-menu/responsive-menu.js';
import {showModal} from '../show-modal.js';
import {filterByCustomList} from '../../lists/filters.js';


function addPrincipalEventListeners() {
  const hamburguerButton = document.getElementById('menuOpen');
  const newTask = document.getElementById('newTask');
  const newList = document.getElementById('newList');
  const navListButtons = document.querySelectorAll('.nav-list__button');
  hamburguerButton.addEventListener("click", showResponsiveMenu);
  newTask.addEventListener('click', showModal);
  newList.addEventListener('click', showModal);
  navListButtons.forEach(e => {
    e.addEventListener('click', filterByCustomList);
  })
}