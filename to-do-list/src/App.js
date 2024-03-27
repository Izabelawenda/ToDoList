import React, { useState } from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Medium',
        category: 'Uncategorized',
        status: 'Pending'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.title.trim() !== '') {
            setTasks(prevState => [...prevState, newTask]);
            setNewTask({
                title: '',
                description: '',
                dueDate: '',
                priority: 'Medium',
                category: 'Uncategorized',
                status: 'Pending'
            });
        }
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    value={newTask.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Task Description"
                    value={newTask.description}
                    onChange={handleChange}
                ></textarea>
                <input
                    type="date"
                    name="dueDate"
                    value={newTask.dueDate}
                    onChange={handleChange}
                />
                <select name="priority" value={newTask.priority} onChange={handleChange}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <select name="category" value={newTask.category} onChange={handleChange}>
                    <option value="Uncategorized">Uncategorized</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Due Date: {task.dueDate}</p>
                        <p>Priority: {task.priority}</p>
                        <p>Category: {task.category}</p>
                        <p>Status: {task.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;