import { useState } from 'react'


const Persons = ({person}) => (
  <div key={person.name}>
    {person.name}
  </div>
)




const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567'}
  ])
  const [newName, setNewName] = useState('')
  const [newNum,setNewNum] = useState('')

  const handleNameChange = (event) =>{
  //console.log(event.target.value);
  setNewName(event.target.value);
}

const handleNumChange = (event) =>{
  //console.log(event.target.value);
  setNewNum(event.target.value);
}

  const addPerson = (event) => {
  event.preventDefault()
  if (newName === '') {
    alert('The name is empty')
  }
  if (persons.every(note => note.name != newName)) {
    const personObj ={
      name:newName,
      key:newName,
      date:new Date().toISOString,
      id:persons.length + 1,
      phone:newNum
    }
    setPersons(persons.concat(personObj))
  }
  else{
    alert(`${newName} is already added to phonebook!`)
  }
  setNewName('')
  setNewNum('')
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div> number: <input value={newNum} onChange={handleNumChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name} {person.phone} </div> )}
    </div>
  )
}

export default App