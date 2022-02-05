import { useReducer, useState } from 'react'
import { reducer } from './resources/reducer'
import './App.css'
import { ACTIONS } from './resources/contants';
import TodoListComponent from './components/TodoListComponent';

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { task } })
    setTask("")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Things to do</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder='Type new task' value={task} onChange={(e) => {
              setTask(e.target.value)
            }} />
          </div>
          <div>
            <TodoListComponent todos={todos} />
          </div>
        </form>
      </main>
    </div>
  )
}

export default App
