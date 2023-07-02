const goals = [];

export default function placeTask(task, proj) {
  if (proj == undefined) {
    newList.tasks.push(task);
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
  task.currentProj.tasks.splice(task.currentProj.tasks.indexOf(task), 1);
}
export { goals, deleteTask };
