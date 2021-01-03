import "../css/styles.css";
import "../css/modals.css";


import {showResponsiveMenu} from "./responsive-menu/responsive-menu.js"
import {showModal} from './modal/show-modal.js';
import {updateCustomLists} from './lists/list.js';
import {updateVariableFromLocalStorage} from './local-storage/update-variable.js'


const hamburguerButton = document.getElementById('menuOpen');
const newTask = document.getElementById('newTask');
const newList = document.getElementById('newList');

updateVariableFromLocalStorage();
updateCustomLists();



hamburguerButton.addEventListener("click", showResponsiveMenu);
newTask.addEventListener('click', showModal);
newList.addEventListener('click', showModal);




//todo: revisar todo el html y css para comprobar que los nombres estan bien y se cumple BEM
//todo: revisar html y css para darle un estilo mas bonito a la pagina y modales en general.