import React from "react";
import Person from "./Person";

function Persons({ persons, filterValue }) {
  return (
    <div>
      {persons.map((item) => {
        if (item.name.toLowerCase().startsWith(filterValue.toLowerCase())) {
          return (
            <Person key={item.name} name={item.name} number={item.number} />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Persons;
