import React from 'react';
import TodoComponent from './TodoComponent';

export default function TodoListComponent({todos}) {
  return <>
    {todos && todos.length > 0 && <h4>Tasks:</h4>}
    <ol>
      {todos.map(todo => {
        return <TodoComponent key={todo.taskId} todo={todo} />
      })}
    </ol>
  </>;
}
