import React from "react";

const App = () => {
  
  const kurssi = 'Sovelluskehitys Half Stack'
  const osa1 = 'Reaktin perusteet'
  const harjoitukset1 = 10
  const osa2 = 'Propsien käyttö datan siirtämiseen'
  const harjoitukset2 = 7
  const osa3 = 'Komponentin tila'
  const harjoitukset3 = 14

  const Header = (props) => {
    return(
      <div>
        <h1>{props.kurssi}</h1>
      </div>
    )
  }

  const Part = (props) => {
    <div>
      {props.osa}
    </div>
  }

  const Content = () => {
    return (
      <div>
        <Part osa={osa1}/>
        <Part osa={osa1}/>
        <Part osa={osa1}/>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        Tehtäviä on yhteensä {props.yhteensä}
      </div>
    )
  }
 

  

  return (
  <div>
    <Header kurssi={kurssi}/>
    <Content 
    osa1={osa1}
    osa2={osa2} 
    osa3={osa3}
    />
    
    <Total yhteensä={harjoitukset1+harjoitukset2+harjoitukset3}/>
  </div>
  )
};

export default App;
