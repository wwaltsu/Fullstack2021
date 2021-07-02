import React from "react";


const Hello = (props) => {
  return (
    <div>
      <p>
        Moi sinun nimesi on {props.name} ja olet {props.age} vuotta vanha  
      </p>
    </div>
  )
}

const App = () => {
  return (
  <div>
    <Hello name='Waltsu' age='12'/>
    <Hello name='Mikael' age='11'/>
  </div>
  )
}

export default App;
