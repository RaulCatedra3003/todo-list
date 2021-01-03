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



//TODO: BUENOS DIAS JOSE!!! TE DEJO UN POCO LA EXPLICACION DE POR DONDE ME HE QUEDADO CON EL PROYECTO, HAZ LO QUE TE APETEZCA, INCLUSO OTRAS FUNCIONALIDADES SI ESTAS NO TE APETECEN HACERLAS, TAMBIEN LO DEJO ESCRITO PARA ACORDARME MAÑANA DE DONDE ME HE QUEDADO QUE LA CABEZA YA NO ME DA MUCHO DE SI!! XD


//todo: Terminar el modal de nueva tarea(se ha de cargar dinamicamente las opciones de listas creadas como opciones del select para poder añadir la tarea a esa lista directamente, esta a medio hacer);
//Todo: Terminar validaciones de los inputs del modal de nueva tarea, hacerlo con dos variables para que cuando las dos sean true el estado del boton pase a disabled=false;
//todo: añadir escuchador al boton save de nueva tarea para crear un objeto de una clase que se cree previamente para guardar toda la informacion de la tarea y poder filtrar luego por estas para que aprezcan o desaparezcan dinamicamente;
//todo: revisar todo el html y css para comprobar que los nombres estan bien y se cumple BEM
//todo: revisar html y css para darle un estilo mas bonito a la pagina y modales en general.