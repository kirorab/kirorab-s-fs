import { useState } from "react"
import { useEffect } from "react"
import Filter from "./components/Filter"
import axios from "axios"

const Countries2Show = ({countries,tooMany}) => {
  if ({tooMany} | countries.length>=10) {
    return(<div>Too many matches, specify another filter </div>)
  }
  else return (
    <div>
      {countries.map(note => <div key={note.name.common}>{note.name.common} </div>)}
    </div>
  )
}

const App = () => {
  const [newSearch,setNewSearch] = useState('')
  const [countries,setCountries] = useState([])
  const [show,setShow] = useState([])
  const [tooMany,setTooMany] = useState(true)

  const couns2Show = tooMany ? "Too many matches, specify another filter " : countries.filter(note => note.name.common.toLowerCase().includes(newSearch.toLowerCase()))
  const handleSearchChange = (event) =>{
    console.log("search change")
    setNewSearch(event.target.value)
    setTooMany(false)
  }

  useEffect(() => {
    console.log('yes');
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response =>{
      console.log(response.data);
      setCountries(response.data)
    })
    
  },[])

  
  return(
    <div>
      <Filter name = "find countries" newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <Countries2Show countries={couns2Show} tooMany={tooMany} />
    </div>
    
  )
}

export default App