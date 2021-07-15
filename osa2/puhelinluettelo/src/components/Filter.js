import React from "react";

const Filter = ({ filtered, setFiltered }) => {
  const handleFilteredChange = (e) => setFiltered(e.target.value);
  return <input value={filtered} onChange={handleFilteredChange} />;
};

export default Filter;
