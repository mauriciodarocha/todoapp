import { ACTIONS } from "./contants";

export function reducer(todos, action) {
    switch(action.type) {
        case ACTIONS.ADD_TODO: {
            return [...todos, addTodo(action.payload.task)]
        }
        case ACTIONS.REMOVE_TODO: {
            return [...removeTodo(todos, action.payload.task)]
        }
        case ACTIONS.TOGGLE_TODO: {
            return [...toggleTodo(todos, action.payload.task)]
        }
    }
}

function addTodo(task) {
    return { taskId: Date.now(), task: task, done: false }
}

function toggleTodo(todos, task) {
    return todos.map(todo => {
        if(todo.taskId === task.taskId) {
            return Object.assign({}, todo, {done: !task.done})
        }
        return todo
    });
}

function removeTodo(todos, task) {
    return todos.filter(todo => {
        if(todo.taskId !== task.taskId) {
            return todo
        }
    });
}