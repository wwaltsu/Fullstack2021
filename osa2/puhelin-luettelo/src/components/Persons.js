import React from 'react'

const Filter = ({persons, filter}) => {
    return (
        <div>
               {/* mapataan henkilöt array of objects [{ name: "Arto hellas" }] */}
      {persons.filter(profile => profile.name.toLowerCase().includes(filter.toLowerCase())).map((person) => (
        <p key={person.name}> {person.name} {person.number} </p>
      ))}
        </div>
    )
}

export default Filter