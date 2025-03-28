import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

 
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

 
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="todo-container">
      

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'none' : 'none' }}>
           <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)} 
            />
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
 