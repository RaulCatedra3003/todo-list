import "../css/styles.css";
import "../css/modals.css";


import {showResponsiveMenu} from "./responsive-menu/responsive-menu.js"
import {showModal} from './modal/show-modal.js';
import {updateCustomLists} from './lists/list.js';
import {updateVariableFromLocalStorage} from './local-storage/update-variable.js';
import {updateTaskList} from './tasks/tasks.js';


const hamburguerButton = document.getElementById('menuOpen');
const newTask = document.getElementById('newTask');
const newList = document.getElementById('newList');

updateVariableFromLocalStorage();
updateCustomLists();
updateTaskList();



hamburguerButton.addEventListener("click", showResponsiveMenu);
newTask.addEventListener('click', showModal);
newList.addEventListener('click', showModal);

