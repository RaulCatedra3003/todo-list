import "../css/styles.css";
import "../css/modals.css";
import "../css/tasks.css";


import {showResponsiveMenu} from "./responsive-menu/responsive-menu.js"
import {showModal} from './modal/show-modal.js';
import {updateCustomLists} from './lists/list.js';
import {updateVariableFromLocalStorage} from './local-storage/update-variable.js';
import {updateTaskList} from './tasks/tasks.js';
import {filterByCustomList} from './lists/filters.js';



const hamburguerButton = document.getElementById('menuOpen');
const newTask = document.getElementById('newTask');
const newList = document.getElementById('newList');


updateVariableFromLocalStorage();
updateCustomLists();
updateTaskList();

const navListButtons = document.querySelectorAll('.nav-list__button');

hamburguerButton.addEventListener("click", showResponsiveMenu);
newTask.addEventListener('click', showModal);
newList.addEventListener('click', showModal);
navListButtons.forEach(e => {
  e.addEventListener('click', filterByCustomList);
})