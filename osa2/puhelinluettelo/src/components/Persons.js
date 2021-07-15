import React from "react";

const Filter = ({ persons, filteredPersons }) => {
  console.log(filteredPersons);
  return (
    <div>
      {/* mapataan henkilöt array of objects [{ name: "Arto hellas" }] */}
      {persons.map((person) => (
        <p key={person.name}>
          {" "}
          {person.name} {person.number}{" "}
        </p>
      ))}
    </div>
  );
};

export default Filter;
