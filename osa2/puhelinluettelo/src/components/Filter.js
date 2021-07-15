import React from "react";

const Filter = ({ filter, setFilter }) => {
  // input value={filter} onChange={(e => setFilter(e.target.value))}
  return <input value={filter} onChange={(e) => setFilter(e.target.value)} />
};

export default Filter;