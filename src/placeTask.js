const newList = [];

export default function placeTask(task, array) {
  if (task.currentProj == null || array == null) {
    task.currentProj = newList;
    newList.push(task);
  } else {
    task.currentProj.splice(task.currentProj.indexOf(task), 1);
    array.push(task);
    task.currentProj = array;
  }
}

export { newList };
