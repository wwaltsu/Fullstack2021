import React, { useState } from "react";

const StatisticsLine = ({ text,value }) => {
  return (
    <div>
     <p>{text} {value}</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAllClicks] = useState(0);

  const handleGoodClick = () => {
    setAllClicks(allClicks + 1);
    setGood(good + 1);
  };

  const handlNeutralClick = () => {
    setAllClicks(allClicks + 1);
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setAllClicks(allClicks + 1);
    setBad(bad + 1);
  };

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  );


  if(allClicks === 0){
    return (
      <div>
      
      <Button handleClick={handleGoodClick} text="Hyvä" />
      <Button handleClick={handlNeutralClick} text="Neutraali" />
      <Button handleClick={handleBadClick} text="Huono" />
      <h3>Tilastot</h3>
      <p>Ei arvosteluja vielä</p>
      </div>
    )}
    
    else


  return (
    
    <div>
      <Button handleClick={handleGoodClick} text="Hyvä" />
      <Button handleClick={handlNeutralClick} text="Neutraali" />
      <Button handleClick={handleBadClick} text="Huono" />
      <StatisticsLine text='hyvä' value={good}/>
      <StatisticsLine text='keskiverto' value={neutral}/>
      <StatisticsLine text='huono' value={bad}/>
      <h3>Statistics</h3>
      <StatisticsLine text='palautteiden määrä' value={allClicks}/>
      <StatisticsLine text='keskiarvo' value={(good+bad)/allClicks}/>
      <StatisticsLine text='positiivisa'value={(good/allClicks)}/>
      
      
    </div>
  );
};

export default App;
