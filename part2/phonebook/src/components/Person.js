
const Person = ({person,del}) => (
  <div> 
    {person.name} {person.number} 
    <button onClick={del}> delete </button>
  </div>
)

export default Person
