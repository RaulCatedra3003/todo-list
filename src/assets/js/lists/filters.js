export {filterByCustomList}


import {updateTaskList} from '../lists/list';


function filterByCustomList(e) {
  e.preventDefault();
  const navListButtons = document.querySelectorAll('.nav-list__button');
  navListButtons.forEach(f => {
    f.classList.remove('selected');
  })
  e.target.classList.add('selected');
  updateTaskList(e.target);
}