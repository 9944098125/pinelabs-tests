window.addEventListener("load", () => {
  // 27. ask them to get allTodo variable from localStorage or empty list
  // allTodo = JSON.parse(localStorage.getItem("allTodo")) || [];
  const newTodoForm = document.querySelector("#new-todo-form");

  newTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.content.value,
      done: false,
      // 28. ask them to insert createAt time
      // createdAt: new Date().getTime(),
    };

    // 29. ask them to add this todo to allTodo list in localStorage
    // allTodo.push(todo);

    // 30. ask them to save that item to local storage
    // localStorage.setItem("allTodo", JSON.stringify(allTodo));

    // Reset the form
    e.target.reset();

    // 31. ask them to display that list of items when submit btn clicked
    // DisplayAllTodo();
  });

  // 32. ask them to display the list when loaded
  // DisplayAllTodo();
});

function DisplayAllTodo() {
  const todoList = document.querySelector("#todo-list");
  todoList.innerHTML = "";

  // 33. ask them to iterate over the list allTodo
  allTodo.___________((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    // 34. ask them to create a label element
    // const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const edit = document.createElement("button");
    // 35. ask them to create an element button
    // const deleteButton = document.createElement("button");

    input.type = "checkbox";
    input.checked = todo.done;
    span.classList.add("bubble");
    content.classList.add("todo-content");
    actions.classList.add("actions");
    edit.classList.add("edit");
    // 36. ask them to add a class for delete btn
    deleteButton.classList.add("_______");

    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    edit.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);

    // 37. ask them to add a condition that if todo.done is true
    // then add a class "done" for todoItem
    ________________________________________________;

    input.addEventListener("change", (e) => {
      todo.done = e.target.checked;
      localStorage.setItem("allTodo", JSON.stringify(allTodo));

      if (todo.done) {
        todoItem.classList.add("done");
      }
      ________________________________________________;
      // 38. ask them to or else remove the class done for todoItem

      DisplayAllTodo();
    });

    edit.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();
      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        // 39. ask them to set todo.content as value there typed
        todo.content = _____________________;
        // 40. ask them to change data given to local storage to string
        localStorage.setItem("allTodo", ___________________(allTodo));
        DisplayAllTodo();
      });
    });

    deleteButton.addEventListener("click", (e) => {
      // 41. ask them to filter the list  by todo itself
      allTodo = __________________________________________;
      localStorage.setItem("allTodo", JSON.stringify(allTodo));
      DisplayAllTodo();
    });
  });
}
