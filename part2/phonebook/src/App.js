import { useState } from 'react'


const Persons = ({person}) => (
  <div key={person.name}>
    {person.name}
  </div>
)




const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) =>{
  //console.log(event.target.value);
  setNewName(event.target.value);
}

  const addName = (event) => {
  event.preventDefault()
  if (persons.every(note => note.name != newName)) {
    const personObj ={
    name:newName,
    key:newName,
    date:new Date().toISOString,
    id:persons.length + 1
  }
  setPersons(persons.concat(personObj))
  }
  else{
    alert(`${newName} is already added to phonebook!`)
  }
  setNewName('')
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name}</div> )}
    </div>
  )
}

export default App