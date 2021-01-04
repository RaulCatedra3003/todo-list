export {
  customListsArray,
  updateCustomLists,
  saveNewList,
  changeValueVariableCustomListArray,
  updateTaskList,
  deleteList,
  updateList
};


import {
  updateLocalStorage
} from '../local-storage/update-local-storage.js';
import {
  hidde,
  hiddeListDetailsModal
} from '../modal/hide-modal';
import {
  showModal
} from '../modal/show-modal.js';
import {
  filterTaskArray
} from '../search-engine/search-engine.js';
import {
  addTaskEventListeners,
  showTask,
  taskArray
} from '../tasks/tasks.js';


let customListsArray = [];


function updateCustomLists() {
  const customListsContent = document.getElementById('customLinstsContent');
  customListsContent.innerHTML = "";
  customListsArray.forEach(e => {
    customListsContent.innerHTML += `<button class="lists-content__button nav-list__button" id="${e.title}" data-id="${e.id}">${e.title}</button>`
  });
  const listContentButton = document.querySelectorAll(".lists-content__button");
  listContentButton.forEach(listItem => {
    listItem.addEventListener("dblclick", showModal)
  })
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
  if (target === "1") {
    displayTask.innerHTML = `<h1 id="displayTaskTitle" class="display-task__title">${document.querySelector(".selected").id}:</h1>`;
    listName = target;
  } else if (target === "4") {
    displayTask.innerHTML = `<h1 id="displayTaskTitle" class="display-task__title">Filter tasks:</h1>`;
    listName = target;
  } else {
    displayTask.innerHTML = `<h1 id="displayTaskTitle" class="display-task__title">${target.id}:</h1>`;
    listName = target.dataset.id;
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
    case "4":
      filterTaskArray.forEach(e => {
        showTask(e);
      })
      addTaskEventListeners();
    default:
      taskArray.forEach(e => {
        if (e.list === listName) {
          showTask(e);
        }
      })
      addTaskEventListeners();
  }
}

function deleteList(e) {
  e.preventDefault();
  const listTitle = document.getElementById('listTitle');
  const listId = listTitle.dataset.id;
  customListsArray = customListsArray.filter(listItem => listItem.id !== parseInt(listId));
  updateLocalStorage();
  updateCustomLists();
  hiddeListDetailsModal(e);
}

function updateList(e) {
  e.preventDefault();
  const listTitle = document.getElementById('listTitle');
  const listId = listTitle.dataset.id;
  customListsArray.forEach(listItem => {
    if (listItem.id === parseInt(listId)) {
      listItem.title = listTitle.value;
    }
  })
  updateLocalStorage();
  updateCustomLists();
  hiddeListDetailsModal(e);
}

function changeValueVariableCustomListArray(value) {
  customListsArray = value;
}

class List {
  constructor(title, id) {
    this.title = title,
      this.id = id
  }
}