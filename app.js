const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", function () {
  const newTodo = document.createElement("div");
  const todoText = document.createElement("span");
  todoText.innerText = todoInput.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", function () {
    newTodo.remove();
  });
  newTodo.appendChild(todoText);
  newTodo.appendChild(deleteBtn);
  todoList.appendChild(newTodo);
  todoInput.value = "";
});
