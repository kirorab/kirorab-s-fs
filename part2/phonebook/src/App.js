import { useState } from 'react'
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum,setNewNum] = useState('')
  const [newSearch,setNewSearch] = useState('')
  const [showAll,setShowAll] = useState(true)

  const notesToShow = showAll ? persons : persons.filter(note => note.name.toLowerCase().includes(newSearch.toLowerCase()))

const handleSearchChange = (event) =>{
  setNewSearch(event.target.value)
  setShowAll(false)
}

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
      date:new Date().toISOString,
      id:persons.length + 1,
      number:newNum
    }
    setPersons(persons.concat(personObj))
  }
  else{
    alert(`${newName} is already added to numberbook!`)
  }
  setNewName('')
  setNewNum('')
}

  return (
    <div>
      <h2>phonebook</h2>
      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <h3>add a new</h3>
      <PersonForm add={addPerson} newName={newName} handleNameChange={handleNameChange} newNum={newNum} handleNumChange={handleNumChange} />
      <h2>Numbers</h2>
      <Persons persons={notesToShow} />
    </div>
  )
}

export default App