import React from "react";

const App = () => {
  const course = "Half Stack Application devolopment";
  const part1 = {
    nimi: "Reactin perusteet ",
    tehtävät: 10,
  };
  const part2 = {
    nimi: "Propsien käyttö datan siirrossa ",
    tehtävät: 7,
  };
  const part3 = {
    nimi: "Komponentin tila ",
    tehtävät: 14,
  };

  return (
    <div>
      <h1>{course}</h1>
      <div>
        Osiot
        <p> {part1.nimi} tehtäviä {part1.tehtävät}</p>
        <p> {part2.nimi} tehtäviä  {part2.tehtävät}</p>
        <p> {part3.nimi} tehtäviä {part3.tehtävät}</p>
        <p>Yhteensä tehtäviä {part1.tehtävät + part2.tehtävät + part3.tehtävät}</p>
      </div>
    </div>
  );
};

export default App;
