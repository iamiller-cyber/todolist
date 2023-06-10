import "./style.css";
import makeTask from "./makeTask.js";
import { default as placeTask, newList, deleteTask } from "./placeTask";
import makeProj from "./makeProject.js";

let theNight = makeProj("The Night", "Things I gotta do tonight");
let theDay = makeProj("The Day", "Things I gotta do today");

let jo = makeTask("Jo", "gotta jo", "Monday", 0);
let kissWife = makeTask("kiss wife", "gotta kiss wife", "Monday", 1);

placeTask(kissWife);

function deleteButton(array, num) {
  const del = document.createElement("button");
  del.classList.add("delete");
  // del.setAttribute("data-index", `${num}`);
  del.addEventListener("click", function () {
    console.log(array, num);
    deleteTask(array[num]);
    clearFreshTasks();
  });
  return del;
}

function makeDisplay() {
  const freshList = document.getElementById("freshList");
  newList.forEach((task) => {
    let div = document.createElement("div");
    div.classList.add("freshTask");
    div.setAttribute("data-index", `${newList.indexOf(task)}`);
    div.textContent = `${task.title}`;
    console.log(newList, `${newList.indexOf(task)}`);
    let del = deleteButton(newList, `${newList.indexOf(task)}`);
    del.setAttribute("data-index", `${newList.indexOf(task)}`);
    div.appendChild(del);

    freshList.appendChild(div);
  });
}

function clearFreshTasks() {
  let list = document.getElementById("freshList");
  let tasks = document.getElementsByClassName("freshTask");
  Array.from(tasks).forEach((task) => list.removeChild(task));
  makeDisplay();
}

makeDisplay();
