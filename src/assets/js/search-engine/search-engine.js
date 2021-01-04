export {
  searchFunction,
  filterTaskArray
}


import {
  updateTaskList
} from "../lists/list";
import {
  taskArray
} from "../tasks/tasks";



let filterTaskArray = [];
let arrayFilterInOrder = [];
let counter = 0;

function searchFunction(e) {
  const search = document.getElementById('filter');
  search.addEventListener('keydown', autocomplete);
  if (e.keyCode != 9) {
    taskFillArray(e);
    updateTaskList("4");
    filterTaskArray = [];
    if (e.keyCode == 13) {
      e.target.value = "";
      e.target.blur();
      search.removeEventListener('keydown', autocomplete);
      counter = 0;
    }
  }
}

function autocomplete(e) {

  if (e.keyCode == 9) {
    e.preventDefault();
    if (counter === 0) {
      taskFillArray(e);
      arrayFilterInOrder = filterTaskArray;
    }
    if (e.target.value === arrayFilterInOrder[counter].title) {
      e.target.value = arrayFilterInOrder[++counter].title;
    } else {
      e.target.value = arrayFilterInOrder[counter++].title;
    }
    filterTaskArray = [];
  }
}

function taskFillArray(e) {
  const taskToSearch = e.target.value;
  taskArray.forEach(task => {
    if (task.title.includes(taskToSearch)) {
      filterTaskArray.push(task);
    }
  })
}