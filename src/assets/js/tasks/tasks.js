export {
  saveNewTask,
  taskArray,
  changeValueVariableTasks,
  changeCompletedOrImportantProperty,
  deleteTask,
  updateTask,
  showTask,
  addTaskEventListeners
}



import { updateTaskList } from "../lists/list";
import {
  updateLocalStorage
} from "../local-storage/update-local-storage";
import {
  hidde, hiddeTaskDetailsModal
} from "../modal/hide-modal";
import {
  showModal
} from "../modal/show-modal";



let taskArray = [];



function saveNewTask(e) {
  e.preventDefault();
  const taskTitle = document.getElementById('taskTitle').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const isCompleted = document.getElementById('isCompleted').checked;
  const isImportant = document.getElementById('isImportant').checked;
  const selectedList = document.getElementById('selectedList').value;
  const taskColor = document.getElementById('taskColor').value;
  const task = new Task(taskTitle, taskDescription, isCompleted, isImportant, selectedList, taskColor, getIdCont());
  taskArray.push(task);
  updateLocalStorage();
  updateTaskList(document.querySelector(".selected"));
  hidde('newTask');

  function getIdCont() {
    return Date.now()
  }
}

function changeValueVariableTasks(value) {
  taskArray = value;
}

function showTask(task) {
  displayTask.innerHTML +=  `
  <section class="task-item" id="${task.title}">
    <input type="checkbox" class="task-item__button task-item__button-completed" id="completeButton--${task.title}" data-id="${task.id}">
    <p class="task-item__title ${task.color}" id="detailsTask" data-id="${task.id}">${task.title}</p>
    <button class="task-item__button task-item__button-important bx bxs-flag-alt" id="importantButton--${task.title}" data-id="${task.id}"></button>
  </section>`;
  const elementToChangeCheked = document.getElementById(`completeButton--${task.title}`);
  const elementToChangeImportant = document.getElementById(`importantButton--${task.title}`)
  if (task.completed === true) {
    elementToChangeCheked.checked = true;
  } else {
    elementToChangeCheked.checked = false;
  }
  if (task.important === true) {
    elementToChangeImportant.classList.add("red-flag");
  } else {
    elementToChangeImportant.classList.remove("red-flag");
  }
}

function addTaskEventListeners() {
  const taskButtonsCompleted = document.querySelectorAll(".task-item__button-completed");
  const taskButtonsImportant = document.querySelectorAll(".task-item__button-important");
  const taskItemTitle = document.querySelectorAll(".task-item__title");
  taskButtonsCompleted.forEach(e => {
    e.addEventListener("click", changeCompletedOrImportantProperty);
  })
  taskButtonsImportant.forEach(e => {
    e.addEventListener('click', changeCompletedOrImportantProperty);
  })
  taskItemTitle.forEach(e => {
    e.addEventListener('click', showModal);
  })
}

function changeCompletedOrImportantProperty(e) {
  let taskToChange = e.target.id.split("--");
  const taskToChangeId = e.target.dataset.id;
  if (taskToChange[0] === "completeButton") {
    taskArray.forEach(e => {
      if (e.id === parseInt(taskToChangeId)) {
        if (e.completed) {
          e.completed = false;
        } else {
          e.completed = true;
        }
      }
    })
  } else if (taskToChange[0] === "importantButton") {
    taskArray.forEach(e => {
      if (e.id === parseInt(taskToChangeId)) {
        if (e.important) {
          e.important = false;
        } else {
          e.important = true;
        }
      }
    })
  }
  updateLocalStorage();
  updateTaskList(document.querySelector(".selected"));
}

function updateTask(e) {
  e.preventDefault()
  const taskTitle = document.getElementById('taskTitle');
  const taskDescription = document.getElementById('taskDescription');
  const selectedList = document.getElementById('selectedList');
  const isCompleted = document.getElementById('isCompleted');
  const isImportant = document.getElementById('isImportant');
  const taskColor = document.getElementById('taskColor');
  const taskId = taskTitle.dataset.id;
  taskArray.forEach(task => {
    if (task.id === parseInt(taskId)) {
      task.title = taskTitle.value;
      task.description = taskDescription.value;
      task.completed = isCompleted.checked;
      task.important = isImportant.checked;
      task.list = selectedList.value;
      task.color = taskColor.value;
    }
  })
  updateLocalStorage();
  updateTaskList(document.querySelector(".selected"));
  hiddeTaskDetailsModal(e);
}

function deleteTask(e) {
  e.preventDefault();
  const taskTitle = document.getElementById('taskTitle');
  const taskId = taskTitle.dataset.id;
  taskArray = taskArray.filter(task => parseInt(taskId) !== task.id);
  updateLocalStorage();
  updateTaskList(document.querySelector(".selected"));
  hiddeTaskDetailsModal(e);
}

class Task {
  constructor(title, description, completed, important, list, color, id) {
    this.title = title,
      this.description = description,
      this.completed = completed,
      this.important = important,
      this.list = list,
      this.color = color,
      this.id = id
  }
}