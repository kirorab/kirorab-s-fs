import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import axios from 'axios';



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum,setNewNum] = useState('')
  const [newSearch,setNewSearch] = useState('')
  const [showAll,setShowAll] = useState(true)

  const notesToShow = showAll ? persons : persons.filter(note => note.name.toLowerCase().includes(newSearch.toLowerCase()))

  const fetchData = () => {axios
    .get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))}

  useEffect(()=> {fetchData();},[])


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
      //id:persons.length + 1,
      number:newNum
    }
    axios
      .post('http://localhost:3001/persons',personObj)
      .then(respone => {
        setPersons(persons.concat(personObj));
      } )
      
    
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