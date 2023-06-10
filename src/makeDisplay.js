export default function makeDisplay() {
  const freshList = document.getElementById("freshList");
  newList.forEach((task) => {
    let div = document.createElement("div");
    div.classList.add("freshTask");
    div.setAttribute("data-index", `${newList.indexOf(task)}`);

    let del = deleteButton(newList, Number(`${newList.indexOf(task)}`));
    del.setAttribute(("data-index", `${newList.indexOf(task)}`));
    div.appendChild(del);

    div.textContent = `${task.title}`;
    freshList.appendChild(div);
  });
}

function deleteButton(array, num) {
  const del = document.createElement("button");
  del.classList.add("delete");
  // del.setAttribute("data-index", `${num}`);
  del.addEventListener("click", deleteTask(array[num]));
}
