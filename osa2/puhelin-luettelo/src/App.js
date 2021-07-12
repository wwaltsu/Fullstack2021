import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto hellas" }]);

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    addPerson(name);
  };

  const addPerson = (name) => {
    setPersons([...persons, { name }]);
  };

  return (
    <div>
      <h2>Puhelinluettelo</h2>
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
          
        </div>
      </form>
      <h2>Numbers</h2>
      {/* mapataan henkilöt array of objects [{ name: "Arto hellas" }] */}
      {persons.map((person) => (
        <p key={person.name}> {person.name} </p>
      ))}
      <div></div>
      ...
    </div>
  );
};

export default App;
