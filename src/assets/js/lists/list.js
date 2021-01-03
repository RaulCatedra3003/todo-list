export {
  customListsArray,
  updateCustomLists,
  saveNewList,
  changeValueVariableCustomListArray
};


import {
  updateLocalStorage
} from '../local-storage/update-local-storage.js';
import {
  hidde
} from '../modal/hide-modal';


let customListsArray = [];


function updateCustomLists() {
  const customListsContent = document.getElementById('customLinstsContent');
  customListsContent.innerHTML = "";
  customListsArray.forEach(e => {
    customListsContent.innerHTML += e.html
  });
}

function saveNewList(e) {
  e.preventDefault();
  const listTitle = document.getElementById("listTitle");
  const newList = new List(listTitle.value, Date.now())
  customListsArray.push(newList);
  updateLocalStorage();
  updateCustomLists();
  hidde("newList");
}


function changeValueVariableCustomListArray(value) {
  customListsArray = value;
}

class List {
  constructor(title, id) {
    this.title = title,
    this.id = id,
    this.html= `<button class="lists-content__button nav-list__button" id="${this.title}" data-id="${this.id}">${this.title}</button>`
  }
}