import React from "react";

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((osat) => {
        return (
          <p>
            {osat.name} {osat.exercises}
          </p>
        );
      })}
      Tehtäviä yhteensä {course.parts.reduce((sum, osat) => sum + osat.exercises, 0)}
      {/*
      <p>
        Tehtäviä yhteensä {osat.reduce(function(sum,osat) {
          return sum + osat.tehtävät
        }, 0)
        }
      </p>
      */}
    </div>
  );
};

export default App;
