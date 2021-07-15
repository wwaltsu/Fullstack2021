import React from "react";

const PersonForm = ({ name, setName, number, setNumber, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">add</button>
      </div>
      <div>
        number:{" "}
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div></div>
    </form>
  );
};

export default PersonForm;