import React from 'react';

export default function TodoComponent({todo}) {
  return <li key={todo.taskId}>
      {todo.task}
  </li>;
}
