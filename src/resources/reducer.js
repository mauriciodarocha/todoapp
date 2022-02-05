import { ACTIONS } from "./contants";

export function reducer(todos, action) {
    switch(action.type) {
        case ACTIONS.ADD_TODO: {
            return [...todos, addTodo(action.payload.task)]
        }
    }
}

function addTodo(task) {
    return { taskId: Date.now(), task: task, done: false }
}