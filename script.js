const form = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const taskInput = document.getElementById("task-input");
  const datetimeInput = document.getElementById("datetime");

  const taskText = taskInput.value;
  const taskTime = datetimeInput.value;
  if (!taskText) return;

  const li = document.createElement("li");
  li.className = "task";

  const taskContent = document.createElement("span");
  taskContent.textContent = `${taskText} ${taskTime ? `📅 ${taskTime}` : ""}`;
  
  const actions = document.createElement("div");
  actions.className = "task-actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.onclick = () => li.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", taskText);
    if (newTask) taskContent.textContent = `${newTask} ${taskTime ? `📅 ${taskTime}` : ""}`;
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskContent);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = "";
  datetimeInput.value = "";
});