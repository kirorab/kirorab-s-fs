import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Person from './components/Person';
import services from './services/personService';



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum,setNewNum] = useState('')
  const [newSearch,setNewSearch] = useState('')
  const [showAll,setShowAll] = useState(true)
  

  const notesToShow = showAll ? persons : persons.filter(note => note.name.toLowerCase().includes(newSearch.toLowerCase()))

  const fetchData = () => {
    services
    .getAll()
    .then(persons => setPersons(persons));
  }

  useEffect(()=> {
    fetchData()}
    ,[])

const del = (id) => {
  const delPer = {...persons.find(person => person.id === id)}
  const delIndex = persons.indexOf(delPer)
  if (window.confirm(`Do you want to delete ${delPer.name}`)) {
    services
    .del(id)
  }
  var changePerson = persons;
  changePerson.splice(delIndex,1);
  console.log(changePerson)
  setPersons(changePerson)
  setShowAll(!showAll)
  setShowAll(!showAll)
}

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
  if (persons.every(note => note.name !== newName)) {
    const personObj ={
      name:newName,
      date:new Date().toISOString,
      //id:persons.length + 1,
      number:newNum
    }
    services
    .create(personObj)
    .then(returnPersons => {
      setPersons(persons.concat(returnPersons));
      
    })
      
    
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
      <div>
        {notesToShow.map(person => <Person key={person.id} person={person} del={()=>del(person.id)} /> )}
      </div>
    </div>
  )
}

export default App