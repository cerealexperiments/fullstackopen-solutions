const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
};

const Total = ({ parts }) => {
  let total = 0;
  parts.forEach((item) => {
    total += item.exercises;
  });
  return <p>Number of exercises: {total}</p>;
};

const App = () => {
  const course = {
    name: "Fundamentals of React",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={[course.parts[0], course.parts[1], course.parts[2]]} />
      <Total parts={[course.parts[0], course.parts[1], course.parts[2]]} />
    </div>
  );
};

export default App;
