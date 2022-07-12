import React from "react";
import Person from "./Person";

function Persons({ setPersons, persons, filterValue }) {
  return (
    <div>
      {persons.map((item) => {
        if (item.name.toLowerCase().startsWith(filterValue.toLowerCase())) {
          return (
            <Person
              persons={persons}
              setPersons={setPersons}
              key={item.name}
              data={item}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Persons;
