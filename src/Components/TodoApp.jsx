import React, { useState } from 'react'

function TodoApp() {
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState('');
    const addTask = () =>{
        if(newTask.trim()!==''){
            setTasks([...tasks,{text:newTask,completed: false}]);
            setNewTask('');
        }
    }
    const toggleCompletion = (index) =>{
        const updatedTasks = tasks.map((task,i)=>
        i===index ? {...task,completed: !task.completed}:task)
        setTasks(updatedTasks);
    }
    const remove = (index) =>{
        const filteredTasks = tasks.filter((_,i)=>i!==index);
        setTasks(filteredTasks)
    }

  return (
    <div className='bg-gradient-to-r from-blue-400 to-purple-500 flex justify-center h-screen items-center text-green-400'>
      <div className='flex flex-col bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-10 max-w-md'>
        <div><h1 className='text-3xl text-center text-white'>TO-DO LIST</h1></div>
        <div className='mt-10'>
            <input className='text-center rounded w-full'
            type="text"
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}
            placeholder='enter a new task'/>
            <button onClick={addTask} className='mt-5 bg-blue-300 rounded-md h-max w-max text-white'>Add Task</button>
             <ul className='text-white'>
                {tasks.map((task,index)=>(
                    <li className='mt-5' key={index} style={{textDecoration: task.completed?'line-through':'none'}}>
                        
                        {task.text}
                        <button onClick={()=>toggleCompletion(index)} className=" bg-green-400 mx-4 rounded-md">
                            {task.completed?'undo':'complete'}
                        </button>
                        <button className="mx-4 bg-red-400 rounded-md" onClick={()=>remove(index)}>Remove</button>
                    </li>
                ))}
             </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoApp
