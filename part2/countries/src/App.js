import { useState } from "react"
import { useEffect } from "react"
import Filter from "./components/Filter"
import axios from "axios"

const Languages = ({languages}) => {
  const la = languages
  var languages = new Array();
  var j = 0;
    for (const i in la) {
    console.log(i)
    languages[j] = la[i]
    j++
  }
  return(
    <ul>
      {languages.map(la => <li key={la}>{la} </li>)}
    </ul>
  )
}
  

const Show = (props) => {
  
  props.country.important = 0;
  
  return (
    <button onClick={()=>props.country.important = 1} >show</button>
    
  )
}

const Cdetails = ({country}) => {

  return (
    <div>
      
      <h2>{country.name.common}</h2>
      <div>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>
      </div>

      <div>
        <h3>languages:</h3>
          <Languages languages={country.languages} />
        <h1>{country.flag}</h1>
      </div>

    </div>
  )
}


const Countries2Show = ({countries,tooMany,show}) => {
  if ({tooMany} | countries.length>=10) {
    return(<div>Too many matches, specify another filter </div>)
  }
  else if (countries.length === 1) {
    return(<Cdetails country={countries[0]} /> )
  }
  else return (
    <div>
      {countries.map(note => <div key={note.name.common}>{note.name.common} <Show country={note} /> </div>)}
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
    //console.log('yes');
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response =>{
      //console.log(response.data);
      setCountries(response.data)
    })
    
  },[])

  
  return(
    <div>
      <Filter name = "find countries" newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <Countries2Show countries={couns2Show} tooMany={tooMany}/>
    </div>
    
  )
}

export default App