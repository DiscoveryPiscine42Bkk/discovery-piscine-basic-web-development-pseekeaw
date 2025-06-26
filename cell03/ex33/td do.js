function addTodo() {
  const newTodo = prompt("Add To Do:");

  if (newTodo !== null && newTodo.trim() !== "") {
    const tbody = document.getElementById("todoBody");

    const row = document.createElement("tr");

    const tdTask = document.createElement("td");
    tdTask.textContent = newTodo;

    const tdAction = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
      const confirmDelete = confirm("Are you sure you want to delete?");
      if (confirmDelete) {
        row.remove();
      }
    };

    tdAction.appendChild(deleteBtn);
    row.appendChild(tdTask);
    row.appendChild(tdAction);

    tbody.appendChild(row);
  }
}

