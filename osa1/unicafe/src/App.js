import React, {useState} from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handlNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const Button = ( { handleClick, text} ) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  return (
    <div>
      <Button handleClick={handleGoodClick} text='Hyvä'/>
      <Button handleClick={handlNeutralClick} text='Neutraali'/>
      <Button handleClick={handleBadClick} text='Huono'/>
    <h3>
      statistics
    </h3>
    <p>Hyvä : {good} </p>
    <p>Neutraali : {neutral}</p>
    <p>Huono : {bad}</p>
    </div>
  )
}

export default App