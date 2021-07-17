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

  const createPerson = (event) => {
    event.preventDefault();
    const updatePerson = persons.find((p) => p.name === name);
    const changePersonNumber = { ...updatePerson, number };

    const newObject = {
      name,
      number,
    };
    if (
      updatePerson &&
      window.confirm(
        "Henkilö " + name + " on jo luettelossa päivitetäänkö numero?"
      )
    ) {
      const { id } = updatePerson;
      personService.update(id, changePersonNumber).then((response) => {
        setPersons(
          persons.map((person) => (person.id !== id ? updatePerson : response))
        );
      });
    }
    if (!updatePerson) {
      personService.create(newObject).then((response) => {
        console.log("res ", response);
        setPersons(persons.concat(response));
      });
    }
  };

  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().includes(filtered.toLowerCase())
  );

  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id);
    const confirmDeletion = window.confirm(
      `Poistetaanko henkilö ${person.name}?`
    );
    if (confirmDeletion) {
      personService.remove(id).then(() => {
        const filteredPersons = persons.filter((person) => person.id !== id);
        setPersons(filteredPersons);
        setFiltered("");
      });
    }
  };

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      filter shown with:
      <Filter filter={filtered} setFilter={setFiltered} />
      <h2>Lisää uusi</h2>
      <PersonForm
        name={name}
        number={number}
        handleSubmit={createPerson}
        setName={setName}
        setNumber={setNumber}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filteredPersons={filteredPersons}
        handleDelete={handleDelete}
      />
      ...
    </div>
  );
};

export default App;
