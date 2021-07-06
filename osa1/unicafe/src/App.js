import React, { useState } from "react";

const Statistics = ({ average, positive, all }) => {
  return (
    <div>
      <p >Keskiarvo {average}</p>
      <p> Positiivinen {positive}</p>
      <p> Kaikki {all}</p>
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
      <h3>statistics</h3>
      <p>Hyvä : {good} </p>
      <p>Neutraali : {neutral}</p>
      <p>Huono : {bad}</p>
      <Statistics
        average={(good + neutral + bad) / allClicks}
        positive={good / allClicks}
        all={allClicks}
      />
    </div>
  );
};

export default App;
