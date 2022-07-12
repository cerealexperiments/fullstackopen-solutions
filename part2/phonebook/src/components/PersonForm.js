import React, { useState } from "react";
import personsService from "../services/persons.js";

function PersonForm({ setPersons, persons }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    const foundPerson = persons.find((person) => {
      return person.name === newPerson.name;
    });
    if (foundPerson) {
      if (
        window.confirm(
          `${foundPerson.name} is already on the list. Do you want to update their number?`
        )
      ) {
        personsService
          .update(foundPerson.id, newPerson)
          .then((updatedPerson) => {
            console.log(updatedPerson);
            setPersons(
              persons.map((person) => {
                if (person.name === newPerson.name) {
                  return { ...person, number: newPerson.number };
                } else {
                  return person;
                }
              })
            );
          });
        setNewName("");
        setNewNumber("");
      } else {
        setNewName("");
        setNewNumber("");
      }
    } else {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
      personsService.create(newPerson).then((addedPerson) => {
        console.log(addedPerson);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={handleChange} value={newName} />
      </div>
      <div>
        number: <input onChange={handleChangeNumber} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;
