import React from "react";
import personService from "../services/persons";

function Person({ data, persons, setPersons }) {
  const deleteSelected = () => {
    personService.deletePerson(data.id).then((response) => {
      console.log(response);
      setPersons(
        persons.filter((item) => {
          return item.id !== data.id;
        })
      );
    });
  };

  return (
    <div>
      <p>
        {data.name} {data.number}
      </p>
      <button onClick={deleteSelected}>delete</button>
    </div>
  );
}

export default Person;
