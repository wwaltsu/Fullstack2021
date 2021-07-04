import React from "react";

const App = () => {
  const course = "Half Stack application devolopment";
  const osat = [
    {
      nimi: "Reaktin perusteet",
      tehtävät: 10,
    },
    {
      nimi: "Propsien harjoittelu",
      tehtävät: 7,
    },
    {
      nimi: "Komponentin tila",
      tehtävät: 14,
    },
  ];
  
  return (
    
    <div>
      <h1>{course}</h1>
      {osat.map(osat => {
        return (
          <p>
            {osat.nimi} {osat.tehtävät}
          </p>
        )
      })}
      
        Tehtäviä yhteensä {osat.reduce((sum,osat) => sum + osat.tehtävät,0)}

        {/*
      <p>
        Tehtäviä yhteensä {osat.reduce(function(sum,osat) {
          return sum + osat.tehtävät
        }, 0)
        }
      </p>
      */}
    </div>
  )

  };
  

export default App;
