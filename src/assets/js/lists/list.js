export {
  customListsArray,
  updateCustomLists,
  saveNewList,
  changeValueVariableCustomListArray,
  updateTaskList
};


import {
  updateLocalStorage
} from '../local-storage/update-local-storage.js';
import {
  hidde
} from '../modal/hide-modal';
import { addTaskEventListeners, showTask, taskArray } from '../tasks/tasks.js';


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

function updateTaskList(target = "1") {
  const displayTask = document.getElementById('displayTask');
  let listName
  if(target==="1"){
    displayTask.innerHTML = `<h1 id="displayTaskTitle" class="display-task__title">${document.querySelector(".selected").id}:</h1>`;
    listName=target;
  }else{
    displayTask.innerHTML = `<h1 id="displayTaskTitle" class="display-task__title">${target.id}:</h1>`;
    listName=target.dataset.id;
  }
  switch (listName) {
    case "1":
      taskArray.forEach(e => {
        if (!e.completed) {
          showTask(e);
        }
      })
      addTaskEventListeners();
      break;
    case '2':
      taskArray.forEach(e => {
        if (e.important && !e.completed) {
          showTask(e);
        }
      })
      addTaskEventListeners();
      break;
    case "3":
      taskArray.forEach(e => {
        if (e.completed) {
          showTask(e);
        }
      })
      addTaskEventListeners();
      break;
    default:
      taskArray.forEach(e => {
        if (e.list === listName) {
          showTask(e);
        }
      })
      addTaskEventListeners();
  }
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