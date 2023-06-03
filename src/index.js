import "./style.css";
import makeTask from "./makeTask.js";
import { default as placeTask, newList } from "./placeTask";
import makeProj from "./makeProject.js";

let theNight = makeProj("The Night", "Things I gotta do tonight");
let theDay = makeProj("The Day", "Things I gotta do today");

let jo = makeTask("Jo", "gotta jo", "Monday", 0);
let kissWife = makeTask("kiss wife", "gotta kiss wife", "Monday", 1);

placeTask(jo, theNight);
placeTask(kissWife, theNight);
placeTask(jo, theDay);

console.log(theNight);
console.log(theDay);

console.log(theNight.tasks[0] === kissWife);
