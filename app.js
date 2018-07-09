const app = {
    todos: [],
    displayTodos: () => {
        console.log(this.todos);
    },
    addTodo: (todo) => {
        this.todos.push(todo);
        this.displayTodos();
    },
    deleteTodo: (index) => {
        this.todos.splice(index, 1);
        this.displayTodos();
    },
    changeTodo: (index, todo) => {
        this.todos.splice(index, 1, todo);
        this.displayTodos();
    }
};

