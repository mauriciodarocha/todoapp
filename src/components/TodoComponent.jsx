import React, { useContext } from 'react';
import { StoreContext } from '../resources/store';
import { ACTIONS } from '../resources/contants';

export default function TodoComponent({todo}) {
  const { dispatch } = useContext(StoreContext);
  return (
      <li key={todo.taskId} className={todo.done ? 'task-done': ''}>
          <div>
            <span>{todo.task}</span>
            <button className={'btn-action btn-toggle '+(todo.done ? 'done':'')} type="button" onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { task: todo } })}><i></i></button>
            <button className='btn-action btn-delete' type="button" onClick={() => dispatch({ type: ACTIONS.REMOVE_TODO, payload: { task: todo } })}><i></i></button>
          </div>
      </li>
    );
}
