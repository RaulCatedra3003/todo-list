export{saveNewTask, taskArray, changeValueVariableTasks, updateTaskList, changeCompletedProperty, changeImportantProperty}



import { updateLocalStorage } from "../local-storage/update-local-storage";
import { hidde } from "../modal/hide-modal";



let taskArray = [];



function saveNewTask(e){
  e.preventDefault();
  const taskTitle = document.getElementById('taskTitle').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const isCompleted = document.getElementById('isCompleted').checked;
  const isImportant = document.getElementById('isImportant').checked;
  const selectedList = document.getElementById('selectedList').value;
  const taskColor = document.getElementById('taskColor').value;
  const task = new Task(taskTitle,taskDescription,isCompleted,isImportant,selectedList,taskColor);
  taskArray.push(task);
  updateLocalStorage();
  updateTaskList();
  hidde('newTask');
}

function changeValueVariableTasks(value){
  taskArray = value;
}

function updateTaskList(listName = "Task") {
  const displayTask = document.getElementById('displayTask');
  displayTask.innerHTML = `<h1 id="displayTaskTitle" class="display-task__title">${listName}:</h1>`;
  switch (listName) {
    case "Task":
      taskArray.forEach(e => {
        if(!e.completed) {
          showTask(e);
        }
      })
      addTaskEventListeners();
      break;
    case 'Important':
      taskArray.forEach(e => {
        if(e.important && !e.completed) {
          showTask(e);
        }
      })
      addTaskEventListeners();
      break;
    case "Completed":
      taskArray.forEach(e => {
        if(e.completed) {
          showTask(e);
        }
      })
      addTaskEventListeners();
      break;
    default:
      taskArray.forEach(e => {
        if(e.list === listName) {
          showTask(e);
        }
      })
      addTaskEventListeners();
  }
  function showTask(task) {
    const html =  task.html;
    displayTask.innerHTML += html;
    const elementToChangeCheked = document.getElementById(`completeButton--${task.title}`);
    const elementToChangeImportant = document.getElementById(`importantButton--${task.title}`)
    if(task.completed === true) {
      elementToChangeCheked.checked = true;
    } else {
      elementToChangeCheked.checked = false;
    }
    if(task.important === true) {
      elementToChangeImportant.classList.add("red-flag");
    } else {
      elementToChangeImportant.classList.remove("red-flag");
    }
  }
}

function addTaskEventListeners() {
  const taskButtonsCompleted = document.querySelectorAll(".task-item__button-completed");
  const taskButtonsImportant = document.querySelectorAll(".task-item__button-important");
  taskButtonsCompleted.forEach(e => {
    e.addEventListener("click", changeCompletedProperty);
  })
  taskButtonsImportant.forEach(e => {
    e.addEventListener('click', changeImportantProperty);
  })
}

function changeCompletedProperty(e) {
  let taskToChangeCompleted = e.target.id.split("--");
  taskToChangeCompleted = taskToChangeCompleted[1];
  taskArray.forEach(e => {
    if(e.title === taskToChangeCompleted) {
      if(e.completed === true) {
        e.completed = false;
      } else {
        e.completed = true;
      }
    }
  })
  updateLocalStorage();
  updateTaskList();
}
function changeImportantProperty(e) {
  let taskToChangeImportant = e.target.id.split("--");
  taskToChangeImportant = taskToChangeImportant[1];
  taskArray.forEach(e => {
    if(e.title === taskToChangeImportant) {
      if(e.important === true) {
        e.important = false;
      } else {
        e.important = true;
      }
    }
  })
  updateLocalStorage();
  updateTaskList();
}

class Task {
  constructor(title, description, completed, important, list, color) {
    this.title = title,
    this.description = description,
    this.completed = completed,
    this.important = important,
    this.list = list,
    this.color = color,
    this.html = `
    <section class="task-item" id="${this.title}">
      <input type="checkbox" class="task-item__button task-item__button-completed" id="completeButton--${this.title}">
      <p class="task-item__title ${this.color}">${this.title}</p>
      <button class="task-item__button task-item__button-important bx bxs-flag-alt" id="importantButton--${this.title}"></button>
    </section>`
  }
}