const newList = [];
const goals = [];

export default function placeTask(task, proj) {
  if (proj == undefined) {
    newList.push(task);
    task.currentProj = newList;
  } else if (task.currentProj == undefined) {
    proj.tasks.push(task);
    task.currentProj = proj;
  } else {
    task.currentProj.tasks.splice(task.currentProj.tasks.indexOf(task), 1);
    proj.tasks.push(task);
    task.currentProj = proj;
  }
}

function deleteTask(task) {
  if (task.currentProj === newList) {
    task.currentProj.splice(task.currentProj.indexOf(task), 1);
  } else task.currentProj.tasks.splice(task.currentProj.tasks.indexOf(task), 1);
}
export { newList, goals, deleteTask };
