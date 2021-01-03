export {filterByCustomList}


import {updateTaskList} from '../tasks/tasks.js';


function filterByCustomList(e) {
  e.preventDefault();
  const navListButtons = document.querySelectorAll('.nav-list__button');
  navListButtons.forEach(f => {
    f.classList.remove('selected');
  })
  e.target.classList.add('selected');
  updateTaskList(e.target.id);
}