/* Seleção de Elementos */
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const editForm = document.querySelector("#editForm");
const editButton = document.querySelector("#editButton");
const eraseButton = document.querySelector("#eraseButton");
const filterButton = document.querySelector("#filterSelect");

let oldInputValue;
/* Funções */

const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTile = document.createElement("h3");
    todoTile.innerText = text;
    todo.appendChild(todoTile);
    /* Botão de Finalizar */
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finishTodo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);
    /* botão de editar */
    const editBtn = document.createElement("button");
    editBtn.classList.add("editTodo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);
    /* Botão de excluir */
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteTodo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();
}

const ToggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = (editInputValue) => {
    const todos = document.querySelectorAll(".todo");
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");
        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = editInputValue;
        }
    })
}

const getSearchtodos = (search) => {
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3").innerText.toLowerCase();

        const normalizedSearch = search.toLowerCase();

        if (!todoTitle.includes(normalizedSearch)) {
            todo.style.display = "None";
        }

    })

}
/* Eventos */
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue);
    } else {
        alert("Por favor, digite uma tarefa.");
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if (targetEl.classList.contains("finishTodo")) {
        parentEl.classList.toggle("done");
    }
    if (targetEl.classList.contains("editTodo")) {
        ToggleForms();
        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
    if (targetEl.classList.contains("deleteTodo")) {
        parentEl.remove();
    }
})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    ToggleForms();
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const editInputValue = editInput.value;

    if (editInputValue) {
        /* Atualizar o texto da tarefa */
        updateTodo(editInputValue);
    }

    ToggleForms();
})

searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value;

    getSearchtodos(search);
})