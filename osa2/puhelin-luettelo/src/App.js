import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto hellas",
      number: "062343212",
    },
  ]);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    addPerson(name,number);
  };

  const addPerson = (name, number) => {
    setPersons([...persons, { name, number } ]);
  };

  return (
    <div>
      filter shown with:<input
      value={filter}
      onChange={(e => setFilter(e.target.value))}
      />
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
          number:{" "}
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div></div>
      </form>
      <h2>Numbers</h2>
      {/* mapataan henkilöt array of objects [{ name: "Arto hellas" }] */}
      {persons.filter(profile => profile.name.toLowerCase().includes(filter.toLowerCase())).map((person) => (
        <p key={person.name}> {person.name} {person.number} </p>
      ))}
      <div></div>
      ...
    </div>
  );
};

export default App;
