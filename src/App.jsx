import { useReducer, useState } from 'react'
import { reducer } from './resources/reducer'
import './App.css'
import { ACTIONS } from './resources/contants';
import TodoListComponent from './components/TodoListComponent';
import { StoreContext } from './resources/store';

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  function handleChange(e) {
    const value = (e.target.value||"").replace(/$\s*/,"");
    if(value.length>0) {
      setTask(value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(task) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { task: task.trim() } })
    }
    setTask("")
  }

  return (
    <StoreContext.Provider value={{ dispatch }}>
      <div className="App">
        <header className="App-header">
          <h1>Things to do</h1>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <div className={'fieldgroup'}>
              <input type="text" placeholder='Type new task' value={task} onChange={handleChange} />
              <button>Add task</button>
            </div>
            <div>
              <TodoListComponent todos={todos} />
            </div>
          </form>
        </main>
      </div>
    </StoreContext.Provider>
  )
}

export default App
