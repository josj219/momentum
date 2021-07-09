const toDoform = document.querySelector(".js-toDoForm"),
  toDoinput = toDoform.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];


function deleteToDo(event) {
  console.log(event.target);
  const btn = event.target;
  const button = btn.parentNode;
  const li = button.parentNode;
  console.log(li);
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  //console.log(cleanToDos);
  toDos = cleanToDos;
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("i");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerHTML = `<i class="far fa-check-square"></i> `;
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: toDos.length + 1
  }
  toDos.push(toDoObj);
  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoinput.value;
  paintTodo(currentValue);
  toDoinput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintTodo(toDo.text);
    })
  }
}



function init() {
  loadToDos();
  toDoform.addEventListener("submit", handleSubmit);
}

init();