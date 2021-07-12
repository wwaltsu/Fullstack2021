import React from "react";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({parts}) => {
    console.log('parts',parts)
  return (
    <p>
      {parts.name} {parts.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (<Part parts={part} /> ))}
    </div>
  );
};

const Total = ({ course }) => {
  return (
    <div>Tehtäviä {course.parts.reduce((a, b) => a + b.exercises, 0)}</div>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

export default Course;
