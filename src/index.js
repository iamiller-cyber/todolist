import "./style.css";
import { default as makeTask, taskArray } from "./makeTask.js";
import { default as placeTask, deleteTask } from "./placeTask";
import { default as makeProj, projectArray } from "./makeProject.js";

import differenceInDays from "date-fns/differenceInDays";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import addHours from "date-fns/addHours";

let theNight = makeProj("The Night", "Things I gotta do tonight");
let theDay = makeProj("The Day", "Things I gotta do today");

let jo = makeTask("Jo", "gotta jo", 2025, 1, 6, 23, 0);
let kissWife = makeTask("kiss wife", "gotta kiss wife", 2025, 1, 6, 23, 1);

placeTask(kissWife, theNight);
placeTask(jo);

// have to turn option selection into the array it represents

function deleteButton(array, num) {
  const del = document.createElement("button");
  del.classList.add("deleteTask");
  del.addEventListener("click", function () {
    clearTasks(array[num]);
  });
  return del;
}
// task always has currentProj if it has been thru placeTask() - which will be done
// with button click on GUI

function clearTasks(task) {
  deleteTask(task);
  if (task.currentProj === newList) {
    clearFresh();
    displayFresh();
  } else {
    clearProj();
    displayProjects();
  }
}

function clearProj() {
  let projects = document.getElementById("projects");
  let projCards = document.getElementsByClassName("projCard");
  Array.from(projCards).forEach((projCard) => projects.removeChild(projCard));

  // dropdown menu
  let dropdown = document.getElementById("project");
  let children = dropdown.childNodes;
  children.forEach((child) => {
    dropdown.removeChild(child);
  });
}

function displayFresh() {
  const freshList = document.getElementById("freshList");
  newList.tasks.forEach((task) => {
    let taskCard = createTaskCard(task);
    freshList.appendChild(taskCard);
  });
}

function clearFresh() {
  const freshList = document.getElementById("freshList");
  let children = freshList.children;
  Array.from(children).forEach((child) => freshList.removeChild(child));
}

function createPopUp(task) {
  let expand = document.createElement("div");
  expand.classList.add("expand");
  let desc = document.createElement("p");
  desc.textContent = task.desc;
  let date = document.createElement("p");
  date.textContent = format(task.due, "MMMM dd, yyyy");
  let title = document.createElement("p");
  title.textContent = task.title;
  switch (task.priority) {
    case 0:
      expand.classList.add("prior0");
      break;
    case 1:
      expand.classList.add("prior1");
      break;
    case 2:
      expand.classList.add("prior2");
      break;
  }
  let closeBut = document.createElement("button");
  closeBut.classList.add("close");
  closeBut.addEventListener("click", () => {
    let children = Array.from(expand.children);
    children.forEach((child) => expand.removeChild(child));
    main.removeChild(expand);
  });
  closeBut.textContent = "De-Expand";
  expand.appendChild(title);
  expand.appendChild(desc);
  expand.appendChild(date);
  expand.appendChild(closeBut);
  return expand;
}

function createTaskCard(task) {
  let taskCard = document.createElement("div");
  taskCard.setAttribute(
    "data-index",
    `${task.currentProj.tasks.indexOf(task)}`
  );
  taskCard.textContent = `${task.title}`;
  let del = deleteButton(
    task.currentProj.tasks,
    `${task.currentProj.tasks.indexOf(task)}`
  );
  del.setAttribute("data-index", `${task.currentProj.tasks.indexOf(task)}`);
  del.textContent = "Delete";
  let expButton = document.createElement("button");
  expButton.textContent = "Expand";
  expButton.addEventListener("click", () => {
    let expand = createPopUp(task);
    const main = document.getElementById("main");
    main.appendChild(expand);
  });
  taskCard.appendChild(expButton);
  taskCard.appendChild(del);
  return taskCard;
}

function createProjectCard(proj) {
  let card = document.createElement("div");
  let title = document.createElement("div");
  let projDesc = document.createElement("h3");
  let taskList = document.createElement("div");
  let sortBy = document.createElement("button");

  card.classList.add("projCard");
  card.setAttribute("data-index", `${projectArray.indexOf(proj)}`);

  title.classList.add("projTitle");
  title.textContent = proj.title;

  projDesc.classList.add("projDesc");
  projDesc.textContent = proj.desc;

  taskList.classList.add("taskList");
  proj.tasks.forEach((task) => {
    let display = createTaskCard(task);
    taskList.appendChild(display);
  });

  sortBy.classList.add("sortBy");
  card.appendChild(title);
  card.appendChild(projDesc);
  card.appendChild(taskList);
  return card;
}

function displayProjects() {
  const projects = document.getElementById("projects");
  projectArray.forEach((proj) => {
    let projDisplay = createProject(proj);
    projects.appendChild(projDisplay);
  });
}

function dropdownProjects() {
  const projects = document.getElementById("project");
  projectArray.forEach((project) => {
    const option = document.createElement("option");
    const opText = document.createTextNode(`${project.title}`);
    option.setAttribute("value", `${project.title}`);
    option.appendChild(opText);
    projects.appendChild(option);
  });
}

// have to figure out how to select currentProj
function inputTasks() {
  const submit = document.getElementById("taskSub");
  const name = document.getElementById("title");
  const desc = document.getElementById("desc");
  const num = document.getElementById("hour");
  const day = document.getElementById("day");
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  const priority = document.getElementById("priority");
  const projSelect = document.getElementById("project");
  submit.addEventListener("click", function (e) {
    if (!name.value) return;
    else {
      e.preventDefault();
      projSelect.options[projSelect.selectedIndex].value.push(
        makeTask(
          name.value,
          desc.value,
          year.value,
          month.value,
          day.value,
          hour.value,
          priority.value,
          projSelect.options[projSelect.selectedIndex].value
        )
      );
      taskStorage();
    }
  });
}

function inputProjects() {
  const submit = document.getElementById("projSub");
  const name = document.getElementById("projectTitle");
  const desc = document.getElementById("projectDesc");
  submit.addEventListener("click", function (e) {
    if (!name.value) return;
    else {
      e.preventDefault();
      makeProj(name.value, desc.value);
      projectStorage();
      clearProj();
      dropdownProjects();
      displayProjects();
    }
  });
}

// set up local storage

function projectStorage() {
  localStorage.setItem("projects", JSON.stringify(projectArray));
}

function taskStorage() {
  localStorage.setItem("tasks", JSON.stringify(taskArray));
}

function retrieveStored() {
  JSON.parse(localStorage.getItem("tasks"));
  JSON.parse(localStorage.getItem("projects"));
}
function startUI() {
  if (localStorage.getItem("tasks") || localStorage.getItem("projects")) {
    retrieveStored();
    displayProjects();
    displayFresh();
    dropdownProjects();
  }
  inputTasks();
  inputProjects();
}

startUI();
