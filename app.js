let app = {
    todos: [],
    displayTodos: () => {
        console.log(app.todos);
    },
    addTodo: (todo) => {
        app.todos.push(todo);
        app.displayTodos();
    },
    deleteTodo: (index) => {
        app.todos.splice(index, 1);
        app.displayTodos();
    },
    changeTodo: (index, todo) => {
        app.todos.splice(index, 1, todo);
        app.displayTodos();
    }
};