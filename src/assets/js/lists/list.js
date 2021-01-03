export{customListsArray, updateCustomLists, saveNewList, changeValueVariableCustomListArray};


import {updateLocalStorage} from '../local-storage/update-local-storage.js';
import {hidde} from '../modal/hide-modal';


let customListsArray = [];


function updateCustomLists() {
  const customListsContent = document.getElementById('customLinstsContent');
  customListsContent.innerHTML="";
  customListsArray.forEach(e => {
    customListsContent.innerHTML += `<button class="lists-content__button nav-list__button" id=${e}>${e}</button>`
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


function changeValueVariableCustomListArray(value){
  customListsArray=value;
}





