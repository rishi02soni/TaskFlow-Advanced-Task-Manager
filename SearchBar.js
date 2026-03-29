import React from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <input
      placeholder="Search tasks..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
