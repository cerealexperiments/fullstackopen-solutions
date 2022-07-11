import React, { useState } from "react";

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
    persons.forEach((person) => {
      if (person.name === newPerson.name) {
        alert(`${newPerson.name} is already on the list`);
        setNewName("");
      } else {
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
      }
    });
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
