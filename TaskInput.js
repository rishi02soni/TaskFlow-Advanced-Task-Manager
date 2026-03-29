import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskInput = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text) return;
    addTask({
      id: uuidv4(),
      text,
      completed: false
    });
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TaskInput;
