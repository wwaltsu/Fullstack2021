import React, { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filtered, setFiltered] = useState("");

  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    if (persons.find((p) => p.name === name)) {
      return alert(name + " on jo luettelossa!");
    }
    addPerson(name, number);
    setName("");
    setNumber("");
  };

  const addPerson = (name, number) => {
    setPersons([...persons, { name, number }]);
  };
  */
  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const newObject = {
      name,
      number,
    };
    personService.create(newObject).then((response) => {
      setPersons(persons.concat(response));
      console.log("response data = ", response.data);
      setName("");
      setNumber("");
    });
  };

  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().includes(filtered.toLowerCase())
  );

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      filter shown with:
      <Filter filter={filtered} setFilter={setFiltered} />
      <h2>Lisää uusi</h2>
      <PersonForm
        name={name}
        number={number}
        handleSubmit={addPerson}
        setName={setName}
        setNumber={setNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filteredPersons={filteredPersons} />
      ...
    </div>
  );
};

export default App;
