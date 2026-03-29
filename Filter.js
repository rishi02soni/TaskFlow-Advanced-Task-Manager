import React from "react";

const Filter = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter("ALL")}>All</button>
      <button onClick={() => setFilter("COMPLETED")}>Completed</button>
      <button onClick={() => setFilter("PENDING")}>Pending</button>
    </div>
  );
};

export default Filter;
