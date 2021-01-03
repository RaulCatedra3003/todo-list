import "../css/styles.css";
import "../css/modals.css";
import "../css/tasks.css";


import {showResponsiveMenu} from "./responsive-menu/responsive-menu.js"
import {showModal} from './modal/show-modal.js';
import {updateCustomLists} from './lists/list.js';
import {updateVariableFromLocalStorage} from './local-storage/update-variable.js';
import {updateTaskList} from './lists/list';
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




//todo tareas para mañana ser buen niño que se acercan los reyes. Aparte, hacer todo el tema de update and remove list todo esta en el open-list-details

//todo empezar con el search y listo.