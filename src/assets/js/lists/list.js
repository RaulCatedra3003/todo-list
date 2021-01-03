export{customListsArray, updateCustomLists, saveNewList};


import {updateLocalStorage} from '../local-storage/update-local-storage.js'


var customListsArray = [];


function updateCustomLists() {
  const customLinstsContent = document.getElementById('customLinstsContent');
  customListsArray.forEach(e => {
    customLinstsContent.innerHTML += `<button class="lists-content__button" id=${e}>${e}</button>`
  });
}

function saveNewList(e) {
  e.preventDefault();
  const listTitle = document.getElementById("listTitle");
  customListsArray.push(listTitle.value);
  updateLocalStorage();
  updateCustomLists();
  hidde("newList");
}





