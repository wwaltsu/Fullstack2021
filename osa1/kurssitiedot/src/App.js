import React from "react";

const App = () => {
  
  const kurssi = 'Sovelluskehitys Half Stack'
  const osa1 = 'Reaktin perusteet'
  const harjoitukset1 = 10
  const osa2 = 'Propsien käyttö datan siirtämiseen'
  const harjoitukset = 7
  const osa3 = 'Komponentin tila'
  const harjoitukset3 = 14

  const Header = (props) => {
    return(
      <div>
        {props.kurssi}
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <p>{props.osa1}</p>
        <p>{props.osa2}</p>
        <p>{props.osa3}</p>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        {props.yhteensä}
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
  </div>
  )
};

export default App;
