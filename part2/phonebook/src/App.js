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
    .then(persons => setPersons(persons))
    .catch(err => {console.log('error');});
  }

  useEffect(()=> {
    fetchData()}
    ,[])

const del = (id) => {
  const delPer = {...persons.find(person => person.id === id)}
  if (window.confirm(`Do you want to delete ${delPer.name}`)) {
    services
    .del(id)
    setPersons(persons.filter(node => node.id !== id))
  }
  
  
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
      setPersons(persons.concat(returnPersons))
      .catch(err => {console.log('error');});
    })
      
    
  }
  else{
    if(window.confirm(`${newName} is already added to numberbook, replace the old number with a new one?`)){
      const update = persons.find(person => person.name === newName)
      services
      .update(update.id,{...update,number:newNum})
      .then(returnPerson => {console.log(returnPerson);
                            setPersons(persons.filter(node => node.id !== update.id).concat(returnPerson))})
      .catch(err => {console.log('error');});
    }
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