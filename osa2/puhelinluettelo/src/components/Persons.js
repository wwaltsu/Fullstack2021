import React from "react";
const Persons = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map((person) => (
        <p key={person.name}>
          {" "}
          {person.name} {person.number}
          <button className="button" onClick={() => handleDelete(person.id)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
