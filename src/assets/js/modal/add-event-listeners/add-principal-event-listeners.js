export {addPrincipalEventListeners}

import {showResponsiveMenu} from '../../responsive-menu/responsive-menu.js';
import {showModal} from '../show-modal.js';


function addPrincipalEventListeners() {
  const hamburguerButton = document.getElementById('menuOpen');
  const newTask = document.getElementById('newTask');
  const newList = document.getElementById('newList');
  hamburguerButton.addEventListener("click", showResponsiveMenu);
  newTask.addEventListener('click', showModal);
  newList.addEventListener('click', showModal);
}