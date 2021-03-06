import React, { useState } from "react";

const Button = ({ text, handleClick }) => {
  return (
    <>
      <button onClick={handleClick}> {text}</button>
    </>
  );
};


const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const [selected, setSelected] = useState(0);

  const initialVotes = Array(anecdotes.length).fill(0);
  console.log(initialVotes)
  const [votes, setVotes] = useState(initialVotes);
  const mostVoted = votes.indexOf(Math.max(...votes));

  const nextAnectode = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  const voting = () => {
    const voteSelected = [...votes];
    voteSelected[selected]++
    setVotes(voteSelected);
  };

  return (
    <div>

      <h1>Päivän anekdootti</h1>

      <p>{anecdotes[selected]}</p>

      <Button handleClick={voting} text="Äänestä" />

      <Button handleClick={nextAnectode} text="Seuraava anekdoottisi" />

      <h1>Äänestetyin anekdootti</h1>

      <p>{anecdotes[mostVoted]}</p>

    </div>
  );
};

export default App;

