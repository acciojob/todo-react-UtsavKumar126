
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const[task,setTask]=useState(0);
  const[AllTask,setAllTask]=useState([]);

  const handleTask=(e)=>{
    setTask(e.target.value)
  }
  const handleAddTodo=()=>{
    if(task!=""){
     setAllTask([...AllTask,task])
     setTask("");
    }
  }
  const handleDeleteTodo = (index) => {
    const updatedTasks = [...AllTask];
    updatedTasks.splice(index, 1);
    setAllTask(updatedTasks);
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <input onChange={handleTask} value={task}/>
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
            {task.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default App
