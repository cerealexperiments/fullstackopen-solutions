import React from "react";

function Total({ parts }) {
  const totalExercises = parts.reduce((total, item) => {
    return total + item.exercises;
  }, 0);
  return <h3>total of {totalExercises} exercises</h3>;
}

export default Total;
