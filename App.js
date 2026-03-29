import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks"));
    if (stored) setTasks(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (id) =>
    setTasks(tasks.filter((t) => t.id !== id));

  const toggleTask = (id) =>
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );

  const editTask = (id, newText) =>
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    );

  const filteredTasks = tasks
    .filter((t) => {
      if (filter === "COMPLETED") return t.completed;
      if (filter === "PENDING") return !t.completed;
      return true;
    })
    .filter((t) =>
      t.text.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="container">
      <h1>🚀 TaskFlow</h1>
      <TaskInput addTask={addTask} />
      <SearchBar setSearch={setSearch} />
      <Filter setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
