import React, { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto hellas",
      number: "062343212",
    },
  ]);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    addPerson(name, number);
    setName('')
    setNumber('')
  };

  const addPerson = (name, number) => {
    setPersons([...persons, { name, number }]);
  };

  return (
    <div>
       <h2>Puhelinluettelo</h2>
      filter shown with:
      <Filter filter={filter} setFilter={setFilter}/>
      <h2>Lisää uusi</h2>
      <PersonForm
        name={name}
        number={number}
        handleSubmit={handleSubmit}
        setName={setName}
        setNumber={setNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
      ...
    </div>
  );
};

export default App;
