import React, { useState } from "react";

const TaskItem = ({ task, deleteTask, toggleTask, editTask }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, text);
    setEditing(false);
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      {editing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span className={task.completed ? "done" : ""}>
          {task.text}
        </span>
      )}

      <button onClick={() => setEditing(!editing)}>Edit</button>
      <button onClick={handleEdit}>Save</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
