const newList = [];

export default function placeTask(task, proj) {
  if (proj == null) {
    task.currentProj = newList;
    newList.push(task);
  } else if (task.currentProj == undefined) {
    proj.tasks.push(task);
    task.currentProj = proj;
  } else {
    task.currentProj.tasks.splice(task.currentProj.tasks.indexOf(task), 1);
    proj.tasks.push(task);
    task.currentProj = proj;
  }
}

export { newList };
